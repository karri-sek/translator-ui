module.exports = {
  jest: {
    moduleFileExtensions: [
      "js",
      "json",
      // tell Jest to handle `*.vue` files
      "vue",
    ],
    modulePaths: ["<rootDir>/src", "<rootDir>/node_modules"],
    transform: {
      ".*\\.(js)$": "babel-jest",
      ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
    },
  },
};