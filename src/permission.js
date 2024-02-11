import router from './router'
import { useUserStoreWithOut } from '@/store/modules/user'

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStoreWithOut()
  if (userStore.getUserInfo) {
    if (to.path === '/login') {
      console.log("🚀 ~ router.beforeEach ~ to, from: IF IF", to, from)
      next({ path: '/' })
    } else {
      const redirectPath = from.query.redirect || to.path
      const redirect = decodeURIComponent(redirectPath)
      const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect }
      console.log("🚀 ~ router.beforeEach ~ to, from: IF ELSE", to, from, to.path === redirect)
      next()
    }
  } else {
    if (['Redirect', 'Login', 'NoFind'].indexOf(to.name) !== -1) {
      console.log("🚀 ~ router.beforeEach ~ to, from: ELSE IF", to, from)
      next()
    } else {
      console.log("🚀 ~ router.beforeEach ~ to, from: ELSE ELSE", to, from)
      next(`/login?redirect=${to.path}`)
    }
  }
})

router.afterEach((to) => {
})
