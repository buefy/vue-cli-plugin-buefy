module.exports = {
  env: {
    jest: true
  },
  extends: [
    'buefy'
  ],
  plugins: [
    'jest'
  ],
  globals: {
    'jest/globals': true,
  },
  rules: {
    "indent": ["error", 2, { "MemberExpression": "off" }],
    "vue-libs/no-async-functions": 0
  }
}
