#!/usr/bin/env tsx
/**
 * i18n:update - Update translation keys across locales
 *
 * Usage:
 *   npm run i18n:update <key> --value.<locale> "text" [--dry-run]
 *
 * Examples:
 *   npm run i18n:update components.common.header.cta --value.en "Book Demo" --value.th "จองสาธิต"
 *   npm run i18n:update pages.home.title --value.en "Welcome" --dry-run
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';

interface UpdateOptions {
  key: string;
  values: Record<string, string>;
  dryRun: boolean;
}

const LOCALES_DIR = 'src/locales';
const SUPPORTED_LOCALES = ['en', 'th', 'zh'];

function parseArgs(): UpdateOptions | null {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    printHelp();
    process.exit(0);
  }

  const options: UpdateOptions = {
    key: args[0],
    values: {},
    dryRun: false,
  };

  for (let i = 1; i < args.length; i++) {
    const arg = args[i];

    if (arg === '--dry-run') {
      options.dryRun = true;
    } else if (arg.startsWith('--value.')) {
      const locale = arg.substring(8); // Remove '--value.' prefix
      const value = args[++i];

      if (!value) {
        console.error(`Error: Missing value for ${arg}`);
        return null;
      }

      if (!SUPPORTED_LOCALES.includes(locale)) {
        console.error(`Error: Unsupported locale "${locale}". Supported: ${SUPPORTED_LOCALES.join(', ')}`);
        return null;
      }

      options.values[locale] = value;
    }
  }

  if (Object.keys(options.values).length === 0) {
    console.error('Error: No values specified. Use --value.<locale> "text"');
    return null;
  }

  return options;
}

function printHelp(): void {
  console.log(`
i18n:update - Update translation keys across locales

Usage:
  npm run i18n:update <key> [options]

Arguments:
  key                 Dot-notation key path (e.g., components.common.header.cta)

Options:
  --value.<locale> "text"    Set value for specific locale (en, th, zh)
  --dry-run                  Show changes without writing files
  --help, -h                 Show this help message

Examples:
  # Update single locale
  npm run i18n:update components.common.header.cta --value.en "Book Demo"

  # Update multiple locales
  npm run i18n:update pages.home.title --value.en "Welcome" --value.th "ยินดีต้อนรับ" --value.zh "欢迎"

  # Preview changes without writing
  npm run i18n:update components.footer.copyright --value.en "© 2025" --dry-run

Notes:
  - This command updates TypeScript locale files in ${LOCALES_DIR}
  - Only specified locales are updated; others remain unchanged
  - Missing translations in non-specified locales will be reported
`);
}

function findLocaleFile(key: string, locale: string): string | null {
  const keyParts = key.split('.');

  // Try to determine the file structure from the key
  // Key format: pages.home.title -> pages/home.ts
  // Key format: components.common.header.cta -> components/common/header.ts

  const possiblePaths: string[] = [];

  // Strategy 1: Try full path segments
  for (let i = keyParts.length - 1; i >= 1; i--) {
    const pathSegments = keyParts.slice(0, i);
    const filePath = resolve(process.cwd(), LOCALES_DIR, ...pathSegments) + '.ts';
    possiblePaths.push(filePath);
  }

  // Strategy 2: Try locale root file (en.ts, th.ts, zh.ts)
  possiblePaths.push(resolve(process.cwd(), LOCALES_DIR, `${locale}.ts`));

  // Find first existing file
  for (const path of possiblePaths) {
    if (existsSync(path)) {
      return path;
    }
  }

  return null;
}

function extractKeySegments(key: string): { namespace: string[]; propertyKey: string } {
  const parts = key.split('.');
  const propertyKey = parts[parts.length - 1];
  const namespace = parts.slice(0, -1);
  return { namespace, propertyKey };
}

function updateTypeScriptFile(
  filePath: string,
  key: string,
  newValue: string,
  dryRun: boolean
): { success: boolean; oldValue?: string; error?: string } {
  try {
    const content = readFileSync(filePath, 'utf-8');
    const { namespace, propertyKey } = extractKeySegments(key);

    // Simple regex-based update for TypeScript object literals
    // This handles: key: "value" or key: 'value'
    const keyPattern = new RegExp(
      `(\\s*${propertyKey}\\s*:\\s*)(['"\`])([^'"\`]*?)\\2`,
      'g'
    );

    let oldValue: string | undefined;
    let found = false;

    const newContent = content.replace(keyPattern, (match, prefix, quote, value) => {
      oldValue = value;
      found = true;
      return `${prefix}${quote}${newValue}${quote}`;
    });

    if (!found) {
      return {
        success: false,
        error: `Key "${propertyKey}" not found in ${filePath}`,
      };
    }

    if (oldValue === newValue) {
      return {
        success: true,
        oldValue,
        error: 'Value unchanged',
      };
    }

    if (!dryRun) {
      writeFileSync(filePath, newContent, 'utf-8');
    }

    return { success: true, oldValue };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

async function main() {
  const options = parseArgs();

  if (!options) {
    process.exit(1);
  }

  console.log('\n📝 i18n Update Tool\n');
  console.log('='.repeat(50));
  console.log(`\n🔑 Key: ${options.key}`);

  if (options.dryRun) {
    console.log('⚠️  DRY RUN MODE - No files will be modified');
  }

  console.log('\n' + '='.repeat(50) + '\n');

  const results: Record<string, { success: boolean; message: string }> = {};
  const missingLocales: string[] = [];

  // Process each locale
  for (const locale of SUPPORTED_LOCALES) {
    if (!options.values[locale]) {
      missingLocales.push(locale);
      continue;
    }

    const value = options.values[locale];
    const localeFile = findLocaleFile(options.key, locale);

    if (!localeFile) {
      results[locale] = {
        success: false,
        message: `❌ Could not find locale file for key: ${options.key}`,
      };
      continue;
    }

    const result = updateTypeScriptFile(localeFile, options.key, value, options.dryRun);

    if (result.success) {
      if (result.oldValue === value) {
        results[locale] = {
          success: true,
          message: `⚪ No change: "${value}"`,
        };
      } else {
        results[locale] = {
          success: true,
          message: `✅ Updated: "${result.oldValue}" → "${value}"`,
        };
      }
    } else {
      results[locale] = {
        success: false,
        message: `❌ Failed: ${result.error}`,
      };
    }
  }

  // Print results
  console.log('Results:\n');
  for (const [locale, result] of Object.entries(results)) {
    console.log(`  [${locale}] ${result.message}`);
  }

  // Warn about missing translations
  if (missingLocales.length > 0) {
    console.log('\n⚠️  Missing translations for locales:');
    missingLocales.forEach(locale => {
      console.log(`  - ${locale}: Translation not provided`);
    });
  }

  console.log('\n' + '='.repeat(50));

  if (options.dryRun) {
    console.log('\n💡 Run without --dry-run to apply these changes\n');
  } else {
    console.log('\n✅ Update complete!\n');
  }

  // Exit with error if any update failed
  const hasFailures = Object.values(results).some(r => !r.success);
  process.exit(hasFailures ? 1 : 0);
}

main().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});
