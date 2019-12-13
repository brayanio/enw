import Home from './www/Home/Index.js'
import Post from './www/Post/Index.js'

const routes = [
  { path: '/post/:postId', component: Post },
  { path: '*', component: Home }
]

onload = () => {
  const router = new VueRouter({ routes })
  
  const app = new Vue({ router }).$mount('#app')
}