const path = require('path');

module.exports = (env) => {
  if (!env) env = { production: false };
  return {
    mode: env.production ? 'production' : 'development',
    entry: path.resolve(__dirname, './src/main/ts/index.tsx'),
    output: {
      path: path.resolve(__dirname, './dist/assets'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'esbuild-loader',
          options: {
            loader: 'tsx',
            target: 'esnext',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    },
    devtool: 'eval-source-map',
    watch: !env.production,
  };
};
