import Hardware from '@/pages/Hardware.vue'
import Homepage from '@/pages/Homepage.vue'
import Software from '@/pages/Software.vue'
import Testpage from '@/pages/Testpage.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {path: "/", name:"home", component:Homepage, props:true},
  {path:"/test", name:"test", component:Testpage, props:true},
  {path:"/nerdzone/software", name:"software", component:Software, props:true},
  {path:"/nerdzone/hardware", name:"hardware", component:Hardware, props:true}
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
