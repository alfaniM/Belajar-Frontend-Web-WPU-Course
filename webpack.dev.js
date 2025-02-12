const path = require('path');
const config = require('./webpack.config');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(config, {
  mode: 'development', //Kalo udah rilis pindah ke production, devtool boleh di apus
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
  },
  plugins: [new MiniCssExtractPlugin()],
  watch: true,
});
