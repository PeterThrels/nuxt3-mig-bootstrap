import { configureCompat } from "@vue/compat";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

configureCompat({
  GLOBAL_EXTEND: false,
  GLOBAL_MOUNT: false,
  GLOBAL_PROTOTYPE: false,
  WATCH_ARRAY: false,
});

export default defineNuxtPlugin((nuxtApp) => {
  const { vueApp } = nuxtApp;
  vueApp.use(BootstrapVue, {
    BTooltip: {
      variant: "primary",
    },
    BModal: {
      footerClass: "mb-5",
      headerClass: "align-items-center",
      okVariant: "primary rounded-pill",
      cancelVariant: "outline-muted rounded-pill",
      centered: true,
    },
    BButton: {
      variant: "primary",
      size: "lg",
    },
    breakpoints: ["xs", "sm", "md", "lg", "xl", "xxl"],
  });
});
