module.exports = {
  entry: {
    app: "./src/ts/main.ts"
  },
  output: {
    filename: "./dist/js/bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      { test: /\.ts?$/, exclude: /node_modules/, loader: "ts-loader" }
    ]
  }
}