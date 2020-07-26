module.exports = {
    configureWebpack: {
        devServer: {
            transportMode: "ws",
            injectClient: false
        }
    }
}