var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon'],
    files: [
      'app/tests/**/*.jsx'
    ],
    preprocessors: {
      'app/tests/**/*.jsx': ['webpack']
    },
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
    webpackMiddleware: {
      noInfo: true
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}
