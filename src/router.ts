import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from '~pages'

console.log('routes', generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes: generatedRoutes,
})

// router.beforeEach(async (to: any) => {
//   // document.title = to.name as string;
//   // // 页面跳转后滚动至顶部
//   // window.scrollTo(0, 0);
// })
export default router
