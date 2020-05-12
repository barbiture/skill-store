module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/style-mock.ts',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/file-mock.ts',
  },
}
