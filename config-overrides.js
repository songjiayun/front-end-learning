const path = require('path');
const { override, addLessLoader, addWebpackAlias, fixBabelImports } = require('customize-cra');
// addWebpackModuleRule

module.exports = override(
    addLessLoader({
        lessOptions: {
            modifyVars: {},
            javascriptEnabled: true
        }
    }),
    // addWebpackModuleRule({
    //     test: /\.svg$/,
    //     use: ['@svgr/webpack']
    // }),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src')
    })
);
