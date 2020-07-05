# @snowpack/plugin-sass

Use Sass to transform `.sass` and `.scss` files.

```
npm install --save-dev @snowpack/plugin-sass
```

#### `snowpack.config.json`

```json
{
  "plugins": ["@snowpack/plugin-sass"]
}
```

### Using with PostCSS

If you need autoprefixing and/or minification, pair this with the [@snowpack/plugin-postcss](../plugin-postcss) plugin with `sass: true` enabled (otherwise, `.sass` and `.scss` files will be ignored by PostCSS):

```json
{
  "plugins": [
    "@snowpack/plugin-sass",
    ["@snowpack/plugin-postcss", { "sass": true }]
  ]
}
```

### Plugin Options

None
