module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '\\.webp$': 'jest-transform-stub', // Add transformer for .webp files
  },
  testEnvironment: 'jsdom', // Specify the test environment here
};
