const path = require("path");
const sass = require("node-sass");

module.exports = () => ({
  input: [".scss", ".sass"],
  output: [".css"],
  async build({ contents, filePath }) {
    if (contents.indexOf("@use ") !== -1) {
      console.warn(
        "node-sass doesn’t support @use yet. Using @import is preferred. See https://github.com/sass/node-sass/issues/2886."
      );
    }

    const includePaths = [path.resolve(process.cwd(), path.dirname(filePath))];

    const out = sass.renderSync({
      data: contents,
      includePaths,
    });
    const { css } = out;
    return { ".css": css.toString() };
  },
});
