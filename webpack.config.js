const { watch } = require('fs');
const path = require('path');

module.exports = {
  mode: 'development', //Kalo udah rilis pindah ke production, devtool boleh di apus
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: 'bundle.js',
  },

  watch: true,
  devtool: false,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: 'defaults',
            presets: [['@babel/preset-env']],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
};
