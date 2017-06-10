var webpack = require('webpack')
var DevServer = require('webpack-dev-server')
var config = require('./webpack.dev.config')
config.entry.example.unshift("webpack-dev-server/client?http://localhost:8090/", "webpack/hot/dev-server");
var compiler = webpack(config)
var server = new DevServer(compiler, {
  contentBase: './example/',
  clientLogLevel: 'warning',
  hot: true,
  stats: {
    chunks: false,
    colors: true
  }
})

server.listen(8090)

module.exports = server