const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  devServer: {
    proxy: {
      "/bookworms": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        pathRewrite: { "^/bookworms": "/bookworms" },
      },
    },
  },
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin("define").tap((args) => {
      args[0]["VUE_PROD_HYDRATION_MISMATCH_DETAILS"] = true;
      return args;
    });
  },
});
