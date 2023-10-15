module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./src/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/__mocks__/styleMock.js",
  },
  transformIgnorePatterns: ["node_modules/(?!(axios)/)"],
};
