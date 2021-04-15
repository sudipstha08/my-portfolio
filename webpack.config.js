const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  plugins: [
    new ESLintPlugin({
      // Plugin options
      extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
      formatter: require.resolve('react-dev-utils/eslintFormatter'),
      eslintPath: require.resolve('eslint'),
      emitWarning: true,
      failOnWarning: false,
      failOnError: false,
    }),
  ],
}
