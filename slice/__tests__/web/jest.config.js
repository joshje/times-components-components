const jestConfigurator = require("@times-components/jest-configurator").default;

module.exports = jestConfigurator("web", __dirname, {
  coverageIgnoreGlobs: ["index.js", "slice.js", "styles.js"]
});
