/**
 * @Author: wangrenjie86@gmail.com
 * @Date: 2022-11-21 10:31:03
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2022-11-21 10:35:18
 * @FilePath: \.eslintrc.js
 * @Description:
 */

module.exports = {
  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended','prettier',
  'plugin:prettier/recommended'],

  rules: {
    // override/add rules settings here, such as:
  },
};
