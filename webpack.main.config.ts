import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/index.ts',
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
  // Enable persistent caching for faster rebuilds
  cache: {
    type: 'filesystem',
  },
  // Enable source maps for easier debugging
  devtool: 'source-map',
  // Optimization settings for better performance
  optimization: {
    minimize: true, // Minify the code in production builds
    splitChunks: {
      chunks: 'all', // Automatically splits chunks for shared modules
    },
  },
  mode: 'production', // Make sure it's set to 'production' for optimizations
};
