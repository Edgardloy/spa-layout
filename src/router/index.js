import { createRouter, createWebHistory } from 'vue-router'

/* Layout */
export const Layout = () => import('@/layout/Layout.vue')

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    meta: {},
    children: [
      {
        path: '',
        component: () => import('@/views/Home/Home.vue'),
        name: 'Home',
        meta: {
          title: 'router.guide',
          icon: 'cib:telegram-plane'
        }
      }
    ]
  },
  {
    path: '/redirect',
    component: Layout,
    name: 'Redirect',
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'Redirect',
        component: () => import('@/views/Redirect/Redirect.vue'),
        meta: {}
      }
    ],
    meta: {
      hidden: true,
      noTagsView: true
    }
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
    name: 'Login',
    meta: {
      hidden: true,
      title: 'Login',
      noTagsView: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/Error/404.vue'),
    name: 'NoFind',
    meta: {
      hidden: true,
      title: '404',
      noTagsView: true
    }
  },
  {
    path: '/:path(.*)*',
    redirect: '/404',
    name: '404Page',
    meta: {
      hidden: true,
      breadcrumb: false
    }
  }
]

export const asyncRouterMap = []

const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes: constantRouterMap,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export const resetRouter = () => {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !['Redirect', 'Login', 'NoFind', 'Root'].includes(name)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export const setupRouter = (app) => {
  app.use(router)
}

export default router
