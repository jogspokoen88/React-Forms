const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#00181D',
                                      "@input-disabled-bg": "@disabled-bg",
                                      "@disabled-bg": "#00181D" },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};