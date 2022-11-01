module.exports = {
  extends: [require.resolve('@bixi-design/lint/stylelint')],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind']
      }
    ]
  }
};
