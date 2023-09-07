const nextJest = require("next/jest");

const NODE_MODULES_EXCEPT_ESM_PACKAGES =
  "/node_modules/(?!(remark|remark-html|remark-parse|remark-stringify))/";

const createJestConfig = nextJest({ dir: "./" });
const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
};

const makeConfig = createJestConfig(customJestConfig);

module.exports = async (...args) => {
  const jestConfig = await makeConfig(...args);

  jestConfig.transformIgnorePatterns = jestConfig.transformIgnorePatterns.map(
    (pattern) =>
      pattern === "/node_modules/" ? NODE_MODULES_EXCEPT_ESM_PACKAGES : pattern
  );

  return jestConfig;
};
