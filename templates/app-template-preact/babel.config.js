const original = require('@snowpack/app-scripts-react/babel.config.json');

module.exports = Object.assign({}, original, {
    presets: original.presets.map((p) => {
        if (p === "@babel/preset-react") {
            return ["@babel/preset-react", {
                "pragma": "h",
                "pragmaFrag": "Fragment"
            }];
        }

        // if later options are added to @babel/preset-react in @snowpack/app-scripts-react
        if (Array.isArray(p) && p[0] === "@babel/preset-react") {
            return ["@babel/preset-react", Object.assign({}, p[0], {
                "pragma": "h",
                "pragmaFrag": "Fragment"
            })];
        }
    
        return p;
    }),
});
