module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  parser: 'babel-eslint',
  rules: {
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
  },
}
