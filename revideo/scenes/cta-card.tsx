import {makeScene2D, Img, Layout, Rect, Txt} from '@revideo/2d';
import {all, createRef, easeInOutCubic, easeOutBack, easeOutCubic, useScene, waitFor} from '@revideo/core';

function wrapOverlayText(text: string, maxCharsPerLine: number, maxLines: number): string {
  const cleaned = text.replace(/\s+/g, ' ').trim();
  if (!cleaned) return '';

  const charCount = (value: string) => Array.from(value).length;
  let tokens: string[];

  if (typeof Intl !== 'undefined' && typeof Intl.Segmenter !== 'undefined') {
    try {
      const segmenter = new Intl.Segmenter('th', {granularity: 'word'});
      const segmented = Array.from(segmenter.segment(cleaned), part => part.segment).filter(Boolean);
      tokens = segmented.length > 0 ? segmented : cleaned.split(/(\s+)/).filter(Boolean);
    } catch (e) {
      tokens = cleaned.split(/(\s+)/).filter(Boolean);
    }
  } else {
    tokens = cleaned.split(/(\s+)/).filter(Boolean);
  }

  if (tokens.length === 1 && !/\s/.test(tokens[0])) {
    tokens = Array.from(tokens[0]);
  }

  const lines: string[] = [];
  let currentLine = '';

  for (const token of tokens) {
    const nextLine = `${currentLine}${token}`;
    if (currentLine && charCount(nextLine) > maxCharsPerLine) {
      lines.push(currentLine.trim());
      currentLine = token.trimStart();
    } else {
      currentLine = nextLine;
    }
  }

  if (currentLine.trim()) {
    lines.push(currentLine.trim());
  }

  if (lines.length > maxLines) {
    const trimmed = lines.slice(0, maxLines);
    const lastLine = trimmed[maxLines - 1];
    const clipped = Array.from(lastLine).slice(0, Math.max(0, maxCharsPerLine - 1)).join('').trimEnd();
    trimmed[maxLines - 1] = `${clipped}…`;
    return trimmed.join('\n');
  }

  return lines.join('\n');
}

export default makeScene2D('cta-card', function* (view) {
  const scene = useScene();
  const logoPath = String(scene.variables.get('logoPath', 'images/logo.jpg')());
  const ctaText = String(scene.variables.get('ctaText', 'Read the full blog - link in description!')());
  const duration = Number(scene.variables.get('duration', 3)()) || 3;
  const brandColor = String(scene.variables.get('brandColor', '#2563eb')());
  const wrappedCtaText = wrapOverlayText(ctaText, 22, 3);

  const outroLayoutRef = createRef<Layout>();
  const outroBgRef = createRef<Rect>();
  const outroLogoRef = createRef<Img>();
  const outroTextRef = createRef<Txt>();

  view.add(
    <Layout ref={outroLayoutRef}>
      <Rect ref={outroBgRef} width={1080} height={1920} fill={brandColor} opacity={0} />
      <Img
        ref={outroLogoRef}
        src={logoPath}
        width={300}
        height={300}
        x={0}
        y={-250}
        radius={20}
        opacity={0}
      />
      <Txt
        ref={outroTextRef}
        text={wrappedCtaText}
        fontSize={56}
        fontWeight={700}
        fill="#ffffff"
        textAlign="center"
        width={860}
        x={0}
        y={220}
        lineHeight={72}
        opacity={0}
      />
    </Layout>,
  );

  yield* all(
    outroBgRef().opacity(1, 0.5, easeOutCubic),
    outroLogoRef().opacity(1, 0.8, easeOutCubic),
    outroLogoRef().scale(0.8, 0).to(1, 0.8, easeOutBack),
    outroTextRef().opacity(1, 0.8, easeOutCubic),
    outroTextRef().y(190, 0.8, easeOutCubic),
  );
  yield* waitFor(Math.max(0.2, duration - 1.3));
  yield* all(
    outroBgRef().opacity(0, 0.5, easeInOutCubic),
    outroLogoRef().opacity(0, 0.5, easeInOutCubic),
    outroTextRef().opacity(0, 0.5, easeInOutCubic),
  );
  outroLayoutRef().remove();
});
