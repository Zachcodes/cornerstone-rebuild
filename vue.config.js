module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3005',
          ws: true,
          changeOrigin: true
        }
      }
    },
    chainWebpack: config => {
      config.optimization.delete('splitChunks')
    }
  }