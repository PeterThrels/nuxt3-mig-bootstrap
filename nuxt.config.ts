export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    resolve: {
      alias: {
        vue: '@vue/compat'
      }
    },
  },
  plugins: ["~/plugins/bootstrap-vue"],
});
