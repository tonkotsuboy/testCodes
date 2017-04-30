// ビルド設定ファイル
const buidConfig = require("./build_config")

const entry = {}

/** webpackの設定ファイルです。 */
let webpackConfig = {
  entry: buidConfig.tsEntryFiles,
  output: {
    filename: "[name].ts"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".ts"]
  },
  module: {
    rules: [
      {test: /\.ts$/, loader: 'ts-loader'}
    ]
  }
}

module.exports = webpackConfig
