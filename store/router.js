import Vue from 'vue'
import Router from 'vue-router'
import Error from '@/layouts/error.vue'
import Stories from '@/pages/stories/index.vue'
import Index from '@/pages/index.vue'
import Policy from '@/pages/policy/index.vue'
Vue.use(Router)
export default new Router({
  routes: [
    { path: '/', component: Index },
    { path: '/policy', component: Policy },
    { path: '/stories', component: Stories },
    { path: '*', component: Error }
  ]
})