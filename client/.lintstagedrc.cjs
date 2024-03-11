module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --cache --fix', 'prettier --write'],
  '*.{ts,tsx}': () => ['npm run check:types'],
};
