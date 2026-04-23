import {makeProject} from '@revideo/core';
import blogVideo from './scenes/blog-video';

export default makeProject({
  scenes: [blogVideo],
  settings: {
    shared: {
      size: {x: 1080, y: 1920},
      background: '#0a0a0a',
      range: [0, 120],
    },
    rendering: {
      fps: 8,
      resolutionScale: 0.5,
        exporter: {
          name: '@revideo/core/ffmpeg',
          options: {
            format: 'mp4',
          },
        },
    },
    preview: {
      fps: 8,
      resolutionScale: 0.5,
    },
  },
});
