module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    'standard'
  ],
  parser: 'vue-eslint-parser',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off'
  }
}
