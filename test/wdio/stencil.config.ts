import { sass } from '@stencil/sass';

import type { Config } from '../../internal/index.js';

export const config: Config = {
  namespace: 'TestApp',
  tsconfig: 'tsconfig-stencil.json',
  outputTargets: [
    {
      type: 'dist',
    },
  ],
  plugins: [sass()],
  buildDist: true,
  globalStyle: './style-plugin/global-sass-entry.scss',
  globalScript: './global.ts',
  extras: {
    lifecycleDOMEvents: true,
    scriptDataOpts: true,
    experimentalSlotFixes: true,
    experimentalScopedSlotChanges: true,
  },
};
