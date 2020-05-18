const { compareSignatures /*, isComponent*/ } = require('@prefresh/utils');

// TODO: replace with @prefresh/snowpack when published
module.exports = function preactRefreshPlugin(config, pluginOptions) {
	return {
		knownEntrypoints: ['@prefresh/core'],
		async transform({ contents, urlPath, isDev }) {
			if (!isDev || !urlPath.endsWith('.js') || urlPath.includes('web_modules') || urlPath.includes('node_modules')) return;

      console.log(contents);
			return {
				result: `
          import '@prefresh/core';
          import * as $OriginalModule$ from ${JSON.stringify(urlPath)};
          let $CurrentModule$ = $OriginalModule$;

          const compareSignaturesForPrefreshment = ${compareSignatures.toString()};

          window.$RefreshSig$ = () => {
            let status = 'begin';
            let savedType;
            return (type, key, forceReset, getCustomHooks) => {
              if (!savedType) savedType = type;
              status = self.__PREFRESH__.sign(type || savedType, key, forceReset, getCustomHooks, status);
            };
          };

          window.$RefreshReg$ = (type, id) => {
            self.__PREFRESH__.register(type, module.i + ' ' + id);
          };

          ${contents}

          if (import.meta.hot) {
            import.meta.hot.accept(({ module }) => {
              try {
                for (let i in module) {
                  if (typeof module[i] === 'function') {
                    if (i in $CurrentModule$) {
                      // We could add a check here on i.name if it's a component.
                      compareSignaturesForPrefreshment(
                        $CurrentModule$[i],
                        module[i]
                      );
                    }
                  }
                }
                $CurrentModule$ = module;
              } catch(e) {
                console.log('error', e);
                window.location.reload();
              }
            });
          }
        `
			};
		}
	};
}
