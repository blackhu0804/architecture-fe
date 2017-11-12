const baseWebpackConfig = require('./base.config')
const devWebpackPartialConfig = {
  devServer: {
    contentBase: path.join(process.cwd(), "sample"),
    compress: true,
  },
};

module.exports = Object.assign({},
  baseWebpackConfig,
  {
    devWebpackPartialConfig
  });