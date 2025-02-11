const webpack = require('webpack');
const { generateOneHostConfig } = require('@indeed/one-host-build');

module.exports = (env, argv) => {
    const { baseConfig, pluginConfigs } = generateOneHostConfig(env, argv);

    return {
        ...baseConfig,
        plugins: [
            ...baseConfig.plugins,
            new webpack.container.ModuleFederationPlugin({
                ...pluginConfigs.moduleFederationPlugin,
                exposes: {
                    './HelloWorld': './src/components/HelloWorld',
                    './PersonalStatement': './src/components/PersonalStatement'
                }
            })
        ]
    };
};
