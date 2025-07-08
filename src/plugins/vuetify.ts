/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify, type ThemeDefinition } from "vuetify";

const spectreLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#1479CD",
  },
  variables: {
    primary: "#1479CD",
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      spectreLightTheme,
    },
    defaultTheme: "spectreLightTheme",
  },
  defaults: {
    VAppBar: {
      color: "primary",
      style: {
        color: "#fff",
        borderRadius: "0 0 16px 16px",
        height: "75px",
        alignItems: "center",
        justifyContent: "center",
      },
    },
    VAvatar: {
      color: "primary",
      style: {
        border: "2px solid #fff",
      },
    },
    VBtn: {
      rounded: "lg",
      height: "40px",
      color: "primary",
      class: "font-weight-bold",
    },
    VCard: {
      variant: "outlined",
      class: "pa-1",
      style: {
        border: "1px solid #E0E0E0",
        borderRadius: "12px",
      },
    },
    VChip: {
      rounded: "lg",
      class: "font-weight-bold",
    },
  },
});
