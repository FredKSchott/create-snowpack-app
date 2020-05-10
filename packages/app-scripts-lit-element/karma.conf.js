const { createDefaultConfig } = require("@open-wc/testing-karma");
const merge = require("deepmerge");

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        { pattern: config.grep ? config.grep : "out-tsc/**/*.(test|spec).js", type: "module" },
      ],
      esm: {
        nodeResolve: true,
      },
    })
  );
  return config;
};
