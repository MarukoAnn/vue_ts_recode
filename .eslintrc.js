module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': 'off',
    'no-tabs': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-irregular-whitespace': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 0,
    'no-use-before-define': 'off',
    'class-methods-use-this': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'no-param-reassign': 0
  },
  settings: { 'import/resolver': { typescript: { project: `${__dirname}/tsconfig.json` } } }
}
