const routes = [
  {
    path: "/",
    component: () => import("layouts/EmptyLayout.vue"),
    children: [
      {
        path: "",
        name: "entry",
        component: () => import("pages/EntryPage.vue"),
      },
      {
        path: "reg",
        name: "reg",
        component: () => import("src/pages/RegPage.vue"),
      },

      {
        path: "login",
        name: "login",
        component: () => import("src/pages/LoginPage.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "map",
        name: "map",
        component: () => import("pages/MapPage.vue"),
      },
      {
        path: "culture",
        name: "culture",
        component: () => import("pages/CulturePage.vue"),
      },
      {
        path: "rotation",
        name: "rotation",
        component: () => import("pages/RotationPage.vue"),
      },
      {
        path: "workers",
        name: "workers",
        component: () => import("pages/WorkerPage.vue"),
      },
      {
        path: "settings",
        name: "settings",
        component: () => import("pages/SettingsPage.vue"),
      },
      {
        path: "worker_info",
        name: "worker_info",
        component: () => import("pages/Worker_info_page.vue")
      },
      {
        path: "organization_info",
        name: "organization_info",
        component: () => import("pages/Organization_info_page.vue")
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
