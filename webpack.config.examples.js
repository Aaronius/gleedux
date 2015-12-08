module.exports = {
  entry: {
    counter: './examples/counter/index.js'
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
