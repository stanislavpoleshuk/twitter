module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'import/order': ['warn', {'newlines-between': 'always', 'groups': ['internal', 'external', 'builtin', 'index', 'sibling', 'parent', 'object']}],
  }
};
