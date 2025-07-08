/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

import { createRouter, createWebHistory } from "vue-router/auto";
import { setupLayouts } from "virtual:generated-layouts";

// Composables

const router = createRouter({
  history: createWebHistory("/spectre-bet/"),
  extendRoutes: setupLayouts,
});

export default router;
