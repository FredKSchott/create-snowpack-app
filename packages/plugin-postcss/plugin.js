const path = require("path");
const postcss = require("postcss");

module.exports = (config, options = {}) => ({
  input: [".css", ...(options.sass ? [".sass", ".scss"] : [])],
  output: [".css"],
  async build({ contents, filePath }) {
    const postCSSConfigPath = path.resolve(
      process.cwd(),
      options.config || "postcss.config.js"
    );
    const postCSSConfig = require(postCSSConfigPath);
    let output = "";

    try {
      output = await postcss(postCSSConfig.plugins || []).process(contents);
    } catch (err) {
      throw new Error(`[${filePath}]: ${err}`);
    }

    return { ".css": output };
  },
});
