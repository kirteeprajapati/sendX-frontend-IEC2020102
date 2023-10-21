/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential', // Vue.js specific rules
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 2020, // This is compatible with ES2020
    sourceType: 'module', // Vue.js projects are typically ES modules
  },
  plugins: ['react-refresh'], // You can remove this line as it's specific to React
  rules: {
    // You can add or modify Vue.js specific rules here
    // For example, 'vue/no-unused-vars': 'warn' to warn about unused variables in Vue templates
  },
}
