module.exports = {
    configureWebpack: {
        devServer: {
            transportMode: "ws",
            injectClient: false,
            proxy: {
                '/': {
                    target: 'http://localhost:5000',
                    ws: true,
                    changeOrigin: true,
                },
            }
        }
    }
} 