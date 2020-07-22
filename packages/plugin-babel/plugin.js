const path = require("path");
const babel = require("@babel/core");

module.exports = function plugin(config, options) {
  return {
    name: "@snowpack/plugin-babel",
    input: [".js", ".jsx", ".ts", ".tsx"],
    output: [".js"],
    async build({ contents, filePath, fileContents }) {
      const { code } = await babel.transformAsync(contents || fileContents, {
        filename: filePath,
        cwd: process.cwd(),
        ast: false,
        compact: false,
      });
      return { ".js": code }; // always return JS
    },
  };
};
