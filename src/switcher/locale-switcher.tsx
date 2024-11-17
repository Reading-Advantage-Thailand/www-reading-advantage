"use client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useChangeLocale, useCurrentLocale, useScopedI18n } from "@/locales/client";
import { Locale, localeNames } from "@/config/locale-config";

export function LocaleSwitcher() {
    const t = useScopedI18n("components.localeSwitcher");
    const changeLocale = useChangeLocale(/* { preserveSearchParams: true } */);

    // Get the current locale
    const currentLocale = useCurrentLocale();

    // Move the current locale to the front of the array
    const sortedLocales = [
        currentLocale,
        ...Object.keys(localeNames).filter((locale) => locale !== currentLocale),
    ];

    return (
        <Select
            defaultValue={currentLocale}
            onValueChange={(locale) => changeLocale(locale as Locale)}
        >
            <SelectTrigger className="w-[100px] bg-sky-600 border-sky-400 text-sky-50 focus:ring-sky-400 focus:ring-offset-sky-500">
                <SelectValue placeholder={t("select")} />
            </SelectTrigger>
            <SelectContent>
                {sortedLocales.map((locale) => (
                    <SelectItem key={locale} value={locale}>
                        {t(locale as Locale)}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>

    );
}