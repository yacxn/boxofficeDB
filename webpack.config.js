const path = require('path')
const webpack = require('webpack');
module.exports = {
  context:__dirname,
  entry:[
    "react-hot-loader/path",
    "webpack-dev-server/client?http//localhost:8000",
    "webpack/hot/only-dev-server",
    "./js/ClientApp.jsx"
  ],
  devtool:"cheap-eval-source-map",
  output: {
    path: path.join(__dirname,"public"),
    filename:'bundle.js'
  },
  resolve: {
    extensions: ['.js','.jsx','.json']
  },
  stats: {
    colors:true,
    reasons:true,
    chunks:true
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]

  ,
  devServer:{
    hot:true,
    publicPath: '/public/',
    historyApiFallback: true
  },
  module: {
    rules:[
      {
        test:/\.jsx?$/,
        loader:'babel-loader'
      }
    ]
  }
}
