const scripts = {
  "mount:public": "mount public --to /",
  "mount:web_modules": "mount web_modules",
  "mount:src": "mount src --to /_dist_",
  "plugin:vue": "@snowpack/plugin-vue",
};

module.exports = {
  scripts,
  installOptions: {},
  devOptions: {},
};
