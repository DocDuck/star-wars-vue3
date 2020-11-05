module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/__tests__/**/*.spec.js'
  ],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'src']
}
