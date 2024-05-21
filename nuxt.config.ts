export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    resolve: {
      alias: {
        vue: "@vue/compat",
      },
    },
    vue: {
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2,
            COMPILER_V_BIND_OBJECT_ORDER: false,
          },
        },
      },
    },
  },
  plugins: ["~/plugins/bootstrap-vue"],
});
