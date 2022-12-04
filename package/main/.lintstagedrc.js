module.exports = {
  '*.{vue,ts,tsx,js,jsx,html}': 'npm run eslint',
  '*.{scss,sass,less,html,vue,css}': 'npm run stylelint',
  '*.{.md,html,js,jsx,vue,ts,tsx,json,css,scss,sass,less}': 'prettier --write',
}
