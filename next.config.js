const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
    [withCSS,{
        cssModules: true,
        cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: "[local]___[hash:base64:5]",
        }
    }],
    [withImages,{}],
    [{distDir:"./build"}]
])
