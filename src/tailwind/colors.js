const variantColors = [
  //
  'main',
];

module.exports = {
  ...variantColors.reduce(
    (acc, color) => ({ ...acc, [color]: `var(--${color})` }),
    {},
  ),
};
