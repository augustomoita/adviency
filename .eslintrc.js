module.exports = {
  plugins: ['prettier'],
  extends: ['airbnb-typescript', 'react-app', 'prettier'],
  rules: { 'prettier/prettier': ['error'] },
  parserOptions: { project: './tsconfig.json' }
};
