const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const PACKAGE_JSON = require('./package.json');
const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                'marketing': 'marketing@http://localhost:8081/remoteEntry.js'
            },
            shared: PACKAGE_JSON.dependencies
        })
    ]
};

module.exports = merge(commonConfig, devConfig);