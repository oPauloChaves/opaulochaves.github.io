module.exports = {
  extends: ['prettier', 'prettier/react'],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        semi: false,
        printWidth: 100,
      },
    ],
  },
}
