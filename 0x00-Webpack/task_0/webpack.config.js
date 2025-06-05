const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js', // Main entry point for Webpack
  output: {
    filename: 'main.js', // Output filename
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Template for the HTML file
    }),
  ],
};
