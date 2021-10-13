module.exports = {
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-proposal-class-properties', 'lodash'],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-runtime']
    }
  }
};
