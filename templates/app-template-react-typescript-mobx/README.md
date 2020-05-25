# New Project

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Dependency notes
This app template uses Mobx 5+, which requires Proxy and Symbol objects. If your environment (IE11 for example) can't support Symbol and Proxy objects, downgrade to Mobx 4. Mobx 4 is also updated with all features that is included in Mobx 5.
[Can I use - Proxy Object]: https://caniuse.com/#feat=proxy
[Can I use - Symbol]: https://caniuse.com/#feat=mdn-javascript_builtins_symbol

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm test

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

### npm run build

Builds a static copy of yor site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" or  "@snowpack/plugin-parcel" to your `snowpack.config.json` config file.



### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.
