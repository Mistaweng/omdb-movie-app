module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
    moduleNameMapper: {
      "\\.(css|less|scss)$": "identity-obj-proxy"
    },
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"  // Add this line
    },
    transformIgnorePatterns: [
      '/node_modules/(?!(axios)/)', // Allow Jest to transform axios
    ]
  };
  