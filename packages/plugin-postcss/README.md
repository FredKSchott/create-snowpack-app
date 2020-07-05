# @snowpack/plugin-postcss

Use PostCSS to process CSS in Snowpack. Good for autoprefixing, minification, and anything else.

```
npm install --save-dev @snowpack/plugin-postcss
```

Add `@snowpack/plugin-postcss` to your `snowpack.config.json`:

```json
{
  "plugins": ["@snowpack/plugin-postcss"]
}
```

Also create a `postcss.config.js` file in your project root:

```bash
npm i autoprefixer cssnano
```

```js
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    autoprefixer("last 2 versions"),
    ...(process.env.NODE_ENV === "production" ? [cssnano()] : []), // minify for build but not dev (for speed)
    // add more PostCSS plugins here
  ],
};
```

See [the PostCSS documentation](https://github.com/postcss/postcss) on what all can be added here.

### Plugin Options

| Name     | Default               | Description                                                                                                                       |
| :------- | :-------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| `config` | `./postcss.config.js` | Where to load PostCSS config (set this if your config file isn’t named `postcss.config.js`).                                      |
| `sass`   | `false`               | Set to `true` to run `.scss` and `.sass` files through PostCSS after compiling (requires [@snowpack/plugin-sass](../plugin-sass)) |

### Configuring PostCSS
