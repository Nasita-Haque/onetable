module.exports = {
  entry: "./frontend/entry.jsx",
  output: {
    path: "./frontend/public",
    filename: "bundle.js",
  },
  module: {
    loaders: [{
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  }
};
