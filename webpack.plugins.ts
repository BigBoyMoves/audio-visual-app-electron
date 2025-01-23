import type IForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

export const plugins = [
  new ForkTsCheckerWebpackPlugin({
    async: true, // Run type checking asynchronously to speed up builds
    typescript: {
      configFile: './tsconfig.json', // Ensure you're using the right tsconfig
    },
    logger: 'webpack-infrastructure',
  }),
];
