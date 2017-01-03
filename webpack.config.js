module.exports = {
  entry: './src/index',
  output: {
    filename: 'google-images-lightbox.user.js',
    path: './dist'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    rules: [
      {test: /\.(ts)$/, use: 'ts-loader'}
    ]
  }
}
