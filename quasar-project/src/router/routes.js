
const routes = [
  { // no need, just for tutor
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') 
      },
    ]
  },
  {
    path: '/worker_info',
    component: () => import('pages/Worker_info_page.vue')
  },
  {
    path: '/organization_info',
    component: () => import('pages/Organization_info_page.vue')
  },
  {
    path: '/rotation_info',
    component: () => import('pages/Crop_rotationinfo_page.vue')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
