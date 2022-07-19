import {Config} from '@stencil/core';
import { sass } from '@stencil/sass';
import {angularOutputTarget, ValueAccessorConfig} from '@stencil/angular-output-target';
const angularValueAccessorBindings: ValueAccessorConfig[] = [];


export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {type: 'dist', esmLoaderPath: '../loader',},
    {type: 'dist-custom-elements',},
    {type: 'docs-readme',},
    {type: 'www', serviceWorker: null, /* disable service workers*/},
    angularOutputTarget({
      componentCorePackage: '@stencil-library/dist/components',
      directivesProxyFile: '../angular-workspace/src/libs/stencil-generated/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    })

  ],
  plugins: [sass()],
};
