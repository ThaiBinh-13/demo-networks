const config = require('stylelint-config-hudochenkov/order');
// https://tailwindcss.com/docs/functions-and-directives
const directives = [
  'tailwind',
  'apply',
  'variants',
  'responsive',
  'screen',
  'if',
  'include',
  'function',
  'else',
  'return',
  'mixin',
  'each',
];

const atRuleNoUnknown = [true, { ignoreAtRules: directives }];
const atRuleEmptyLineBefore = [
  'always',
  {
    except: ['first-nested', 'blockless-after-blockless'],
    ignore: ['after-comment'],
    severity: 'warning',
  },
];

const propertiesOrder = config.rules['order/properties-order'];
const order = [
  [
    'dollar-variables',
    'custom-properties',
    'at-rules',
    { type: 'at-rule', name: 'tailwind' },
    { type: 'at-rule', name: 'layer' },
    { type: 'at-rule', name: 'apply' },
    { type: 'at-rule', name: 'variants' },
    'declarations',
    { type: 'at-rule', name: 'responsive' },
    { type: 'at-rule', name: 'screen' },
    { type: 'at-rule', name: 'supports' },
    { type: 'at-rule', name: 'media' },
    'rules',
  ],
  { severity: 'warning' },
];

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-hudochenkov/dollar-variables',
    'stylelint-config-hudochenkov/stylistic-issues',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    indentation: 2,

    'at-rule-no-unknown': null,
    'at-rule-empty-line-before': atRuleEmptyLineBefore,
    'declaration-bang-space-before': null,

    'scss/at-rule-no-unknown': atRuleNoUnknown,

    'order/properties-order': propertiesOrder,
    'order/order': order,
  },
};
