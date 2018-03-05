module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [],
          },
        },
      },
      { test: /\.(s?css)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
}
