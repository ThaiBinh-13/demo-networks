const isWin = require('os').platform() === 'win32';

module.exports = {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'avoid',
  htmlWhitespaceSensitivity: 'ignore',
  printWidth: 80,
  endOfLine: isWin ? 'crlf' : 'lf',
  overrides: [
    {
      files: [
        // alphabetical order
        '.babelrc',
        '.eslintrc',
        '.prettierrc',
        '.stylelintrc',
        '*.code-workspace',
      ],
      options: { parser: 'json' },
    },
    {
      files: [
        // alphabetical order
        'package.json',
        'package-lock.json',
        '*.md',
        '*.yml',
      ],
      options: { tabWidth: 2 },
    },
  ],
};
