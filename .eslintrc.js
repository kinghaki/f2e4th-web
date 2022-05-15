module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  // 'plugin:vue/vue3-recommended',
  // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.

  // "@vue/eslint-config-typescript是用來配置vue文件的
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    // 'plugin:@typescript-eslint/recommended', // vue專案配置這行會出錯，待確認
    '@vue/typescript/recommended', //
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },

  // 解決vue3 defineProps' is not defined.
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },

  // 引用的插件 下载的插件去掉eslint-plugin-前缀引入
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off', // 最後build在打開有沒有沒使用到的
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
