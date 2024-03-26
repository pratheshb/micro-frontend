const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const PACKAGE_JSON = require('./package.json');
const PROD_CONFIG = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/app'
            },
            shared: PACKAGE_JSON.dependencies
        })
    ]
};

module.exports = merge(commonConfig, PROD_CONFIG);