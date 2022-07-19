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
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/typescript/recommended', // vue文件的typescript進行規範
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
    '@typescript-eslint/type-annotation-spacing': ['error', { before: false, after: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: ['error', 'always'], // 語句強制分號結尾, 解決standard將分號移除的規則
    camelcase: 'error', // 強制使用駱駝拼寫法命名約定
    indent: ['error', 2], // 縮進風格, 2空格
    'vue/order-in-components': ['error', {
      order: [
        'el',
        'name',
        'key',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        ['provide', 'inject'],
        'ROUTER_GUARDS',
        'layout',
        'middleware',
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'emits',
        'setup',
        'asyncData',
        'data',
        'fetch',
        'head',
        'computed',
        'watch',
        'watchQuery',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3
      },
      multiline: {
        max: 3
      }
    }],
    'vue/html-self-closing': 'off',
    'import/first': 'off' // vue3寫兩個script會有問題
  }
};
