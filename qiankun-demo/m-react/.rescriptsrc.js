module.exports = {
  //重写配置之后记得package.json中把项目启动命令react-scripts start改为rescripts start
  webpack: (config) => {
    config.output.libraryTarget = 'umd';
    config.output.library = 'm-react'; //打包的格式是umd格式
    return config;
  },
  devServer: (config) => {
    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    return config;
  }
}