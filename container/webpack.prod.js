const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const PACKAGE_JSON = require('./package.json');
const DOMAIN = process.env.PRODUCTION_DOMAIN;
const PROD_CONFIG = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        clean: true,
        publicPath: '/container/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                'marketing': `marketing@${DOMAIN}/marketing/latest/remoteEntry.js`
            },
            shared: PACKAGE_JSON.dependencies
        })
    ]
};

module.exports = merge(commonConfig, PROD_CONFIG);