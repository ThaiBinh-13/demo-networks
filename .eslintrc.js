const path = require('path');
const isWin = require('os').platform() === 'win32';

const isProd = process.env.NODE_ENV !== 'production';
const packageDir = [
  path.join('./'),
  //
];

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',

    'plugin:import/typescript',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',

    '@vue/eslint-config-airbnb',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',

    'plugin:@intlify/vue-i18n/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  settings: {
    'import/core-modules': ['vue-auto-routing'],
    'vue-i18n': {
      localeDir: './src/locales/*.{json,json5,yaml,yml}',
    },
  },
  rules: {
    'linebreak-style': ['error', isWin ? 'windows' : 'unix'],

    camelcase: 'off',
    'no-console': [
      isProd ? 'warn' : 'off',
      { allow: ['warn', 'debug', 'error'] },
    ],
    'no-debugger': isProd ? 'warn' : 'off',
    'no-shadow': 'off',
    'import/no-cycle': 0,
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 0,
    'vue/no-unused-vars': 'warn',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: ['/^el-/', 'icon', 'swiper', 'swiper-slide'],
      },
    ],
    'vue/padding-line-between-blocks': ['error', 'always'],

    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': 'warn',

    '@intlify/vue-i18n/key-format-style': 'off',
    '@intlify/vue-i18n/no-dynamic-keys': 'off',
    '@intlify/vue-i18n/no-html-messages': 'off',
    '@intlify/vue-i18n/no-missing-keys-in-other-locales': 'off',
    '@intlify/vue-i18n/no-missing-keys': 'off',
    '@intlify/vue-i18n/no-raw-text': ['warn', { ignorePattern: '^[-#:()&]+$' }],
    '@intlify/vue-i18n/no-unused-keys': 'off',
  },
  overrides: [
    {
      files: [
        // alphabetical order
        '.eslintrc.js',
        '.prettierrc.js',
        '.stylelintrc.js',
        'postcss.config.js',
        'src/tailwind/*.js',
        'tailwind.config.js',
        'vue.config.js',
      ],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'global-require': 'off',

        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
  ],
};
