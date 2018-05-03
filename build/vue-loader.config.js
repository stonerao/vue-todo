module.exports = (isDev) => {
    return {
        preserveWhitepace: true,
        extractCSS: !isDev, //css是否打包到一个文件中 是否是异步加载 提高首屏加载
        cssModeuls: {},
        loaders: {},
        preLoader: {},
        postLoader: {}
    }
}