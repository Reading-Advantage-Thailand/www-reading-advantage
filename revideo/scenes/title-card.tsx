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

export default makeScene2D('title-card', function* (view) {
  const scene = useScene();
  const logoPath = String(scene.variables.get('logoPath', 'images/logo.jpg')());
  const title = String(scene.variables.get('title', 'Blog Title')());
  const duration = Number(scene.variables.get('duration', 3)()) || 3;
  const wrappedTitle = wrapOverlayText(title, 22, 3);

  const introLayoutRef = createRef<Layout>();
  const introLogoRef = createRef<Img>();
  const introTitleRef = createRef<Txt>();

  view.add(
    <Layout ref={introLayoutRef}>
      <Rect width={1080} height={1920} fill="#0a0a0a" />
      <Img
        ref={introLogoRef}
        src={logoPath}
        width={400}
        height={400}
        x={0}
        y={-200}
        radius={20}
        opacity={0}
      />
      <Txt
        ref={introTitleRef}
        text={wrappedTitle}
        fontSize={62}
        fontWeight={700}
        fill="#ffffff"
        textAlign="center"
        width={860}
        x={0}
        y={300}
        lineHeight={76}
        opacity={0}
      />
    </Layout>,
  );

  yield* all(
    introLogoRef().opacity(1, 0.8, easeOutCubic),
    introLogoRef().scale(0.8, 0).to(1, 0.8, easeOutBack),
    introTitleRef().opacity(1, 0.8, easeOutCubic),
    introTitleRef().y(280, 0.8, easeOutCubic),
  );
  yield* waitFor(Math.max(0.2, duration - 1.3));
  yield* all(
    introLogoRef().opacity(0, 0.5, easeInOutCubic),
    introTitleRef().opacity(0, 0.5, easeInOutCubic),
  );
  introLayoutRef().remove();
});
