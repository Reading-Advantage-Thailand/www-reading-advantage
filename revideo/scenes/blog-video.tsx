import {makeScene2D, Img, Layout, Rect, Txt} from '@revideo/2d';
import {
  all,
  createRef,
  easeInOutCubic,
  easeOutBack,
  easeOutCubic,
  linear,
  useScene,
  waitFor,
} from '@revideo/core';

type VideoSegment = {
  text: string;
  imagePath: string;
};

export default makeScene2D('blog-video', function* (view) {
  const scene = useScene();
  const logoPath = String(scene.variables.get('logoPath', 'images/logo.jpg')());
  const title = String(scene.variables.get('title', 'Blog Title')());
  const rawSegments = scene.variables.get('segments', [] as VideoSegment[] | string)();
  const ctaText = String(scene.variables.get('ctaText', 'Read the full blog - link in description!')());
  const introDuration = Number(scene.variables.get('introDuration', 3)()) || 3;
  const outroDuration = Number(scene.variables.get('outroDuration', 3)()) || 3;
  const narrationDuration = Number(scene.variables.get('narrationDuration', 60)()) || 60;
  const brandColor = String(scene.variables.get('brandColor', '#2563eb')());

  let segments: VideoSegment[] = [];
  if (Array.isArray(rawSegments)) {
    segments = rawSegments as VideoSegment[];
  } else if (typeof rawSegments === 'string') {
    try {
      const parsed = JSON.parse(rawSegments);
      if (Array.isArray(parsed)) {
        segments = parsed as VideoSegment[];
      }
    } catch (error) {
      // Ignore parse failures and use fallback segment below.
    }
  }

  const safeSegments = segments.length > 0 ? segments : [{text: title, imagePath: logoPath}];
  const totalDuration = Math.max(20, narrationDuration);
  const contentDuration = Math.max(safeSegments.length * 4, totalDuration - introDuration - outroDuration);
  const segmentDuration = contentDuration / safeSegments.length;

  // Intro
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
        text={title}
        fontSize={72}
        fontWeight={700}
        fill="#ffffff"
        textAlign="center"
        width={900}
        x={0}
        y={300}
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
  yield* waitFor(Math.max(0.5, introDuration - 1.5));
  yield* all(
    introLogoRef().opacity(0, 0.5, easeInOutCubic),
    introTitleRef().opacity(0, 0.5, easeInOutCubic),
  );
  introLayoutRef().remove();

  // Content segments
  for (const segment of safeSegments) {
    const segmentLayoutRef = createRef<Layout>();
    const imgRef = createRef<Img>();
    const overlayRef = createRef<Rect>();
    const textBgRef = createRef<Rect>();
    const textRef = createRef<Txt>();

    view.add(
      <Layout ref={segmentLayoutRef}>
        <Img
          ref={imgRef}
          src={segment.imagePath}
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
          width={960}
          height={220}
          fill={brandColor}
          x={0}
          y={620}
          opacity={0}
          radius={20}
        />
        <Txt
          ref={textRef}
          text={segment.text}
          fontSize={52}
          fontWeight={700}
          fill="#ffffff"
          textAlign="center"
          width={900}
          x={0}
          y={620}
          lineHeight={74}
          opacity={0}
        />
      </Layout>,
    );

    yield* all(
      imgRef().opacity(1, 0.6, easeOutCubic),
      imgRef().scale(1.08, 0).to(1, segmentDuration, linear),
      overlayRef().opacity(1, 0.6, easeOutCubic),
      textBgRef().opacity(0.9, 0.5, easeOutCubic),
      textRef().opacity(1, 0.5, easeOutCubic),
      textRef().y(600, 0.5, easeOutCubic),
    );

    yield* waitFor(Math.max(0.6, segmentDuration - 1.1));
    yield* all(
      imgRef().opacity(0, 0.5, easeInOutCubic),
      overlayRef().opacity(0, 0.5, easeInOutCubic),
      textBgRef().opacity(0, 0.5, easeInOutCubic),
      textRef().opacity(0, 0.5, easeInOutCubic),
    );
    segmentLayoutRef().remove();
  }

  // Outro
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
        text={ctaText}
        fontSize={62}
        fontWeight={700}
        fill="#ffffff"
        textAlign="center"
        width={900}
        x={0}
        y={220}
        lineHeight={84}
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
  yield* waitFor(Math.max(0.5, outroDuration - 1));
  yield* all(
    outroBgRef().opacity(0, 0.5, easeInOutCubic),
    outroLogoRef().opacity(0, 0.5, easeInOutCubic),
    outroTextRef().opacity(0, 0.5, easeInOutCubic),
  );
  outroLayoutRef().remove();
});
