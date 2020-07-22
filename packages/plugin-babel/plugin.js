const babel = require("@babel/core");

module.exports = function plugin(config, options) {
  return {
    name: '@snowpack/plugin-babel',
    input: ['.js', '.jsx', '.ts', '.tsx'],
    output: '.js',
    async build({ contents, filePath }) {
      const result = await babel.transformAsync(contents, {
        filename: filePath,
        cwd: process.cwd(),
        ast: false,
        compact: false,
      });
      return { result: result.code };
    },
  };
};
