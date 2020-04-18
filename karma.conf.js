// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: [
      'jasmine', 'karma-typescript'
    ],
    plugins: [
      require('karma-jasmine'),
      require('karma-typescript'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter')
    ],
    files: [
      "*.ts" // *.tsx for React Jsx
    ],
    preprocessors: {
      "*.ts": "karma-typescript" // *.tsx for React Jsx
    },
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/'),
      reports: ['html', 'lcovonly', 'text-summary', 'karma-typescript'],
      fixWebpackSourcePaths: true
    },
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json"
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
