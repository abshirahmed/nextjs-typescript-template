module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    amd: true,
    node: true,
    jest: true,
    'jest/globals': true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'plugin:@next/next/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'jest', 'jest-dom'],
  rules: {
    'react/react-in-jsx-scope': 'off'
  },
  globals: {
    React: 'writable'
  }
};
