import {makeScene2D, Img, Layout, Rect, Txt} from '@revideo/2d';
import {all, createRef, easeInOutCubic, easeOutCubic, linear, useScene, waitFor} from '@revideo/core';

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

export default makeScene2D('segment', function* (view) {
  const scene = useScene();
  const imagePath = String(scene.variables.get('imagePath', 'images/logo.jpg')());
  const text = String(scene.variables.get('text', '')());
  const duration = Number(scene.variables.get('duration', 5)()) || 5;
  const brandColor = String(scene.variables.get('brandColor', '#2563eb')());
  const wrappedText = wrapOverlayText(text, 24, 4);

  const fadeInDuration = Math.min(0.6, Math.max(0.2, duration * 0.15));
  const fadeOutDuration = Math.min(0.5, Math.max(0.2, duration * 0.15));
  const holdDuration = Math.max(0.2, duration - fadeInDuration - fadeOutDuration);

  const segmentLayoutRef = createRef<Layout>();
  const imgRef = createRef<Img>();
  const overlayRef = createRef<Rect>();
  const textBgRef = createRef<Rect>();
  const textRef = createRef<Txt>();

  view.add(
    <Layout ref={segmentLayoutRef}>
      <Img
        ref={imgRef}
        src={imagePath}
        width={1080}
        height={1920}
        opacity={0}
      />
      <Rect
        ref={overlayRef}
        width={1080}
        height={1920}
        fill="rgba(0,0,0,0.45)"
        opacity={0}
      />
      <Rect
        ref={textBgRef}
        width={940}
        height={300}
        fill={brandColor}
        x={0}
        y={620}
        opacity={0}
        radius={20}
      />
      <Txt
        ref={textRef}
        text={wrappedText}
        fontSize={44}
        fontWeight={700}
        fill="#ffffff"
        textAlign="center"
        width={840}
        x={0}
        y={620}
        lineHeight={58}
        opacity={0}
      />
    </Layout>,
  );

  imgRef().scale(1.08);
  yield* all(
    imgRef().opacity(1, fadeInDuration, easeOutCubic),
    overlayRef().opacity(1, fadeInDuration, easeOutCubic),
    textBgRef().opacity(0.9, fadeInDuration, easeOutCubic),
    textRef().opacity(1, fadeInDuration, easeOutCubic),
    textRef().y(600, fadeInDuration, easeOutCubic),
  );
  yield* all(
    imgRef().scale(1, holdDuration, linear),
    waitFor(holdDuration),
  );
  yield* all(
    imgRef().opacity(0, fadeOutDuration, easeInOutCubic),
    overlayRef().opacity(0, fadeOutDuration, easeInOutCubic),
    textBgRef().opacity(0, fadeOutDuration, easeInOutCubic),
    textRef().opacity(0, fadeOutDuration, easeInOutCubic),
  );
  segmentLayoutRef().remove();
});
