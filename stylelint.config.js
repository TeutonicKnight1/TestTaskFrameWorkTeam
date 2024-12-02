module.exports = {
  extends: [
    'stylelint-config-standard-scss',
  ],
  plugins: ['stylelint-scss'],
  rules: {

    'indentation': 2,
    'string-quotes': 'single',
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'declaration-block-trailing-semicolon': 'always',
    'selector-class-pattern': '^[a-z][a-z0-9_-]+$'
  },
};
