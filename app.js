import About from './www/About/Index.js'
import Home from './www/Home/Index.js'
import Intentions from './www/Intentions/Index.js'
import Materials from './www/Materials/Index.js'
import Post from './www/Post/Index.js'
import Sidebar from '../www/Shared/Sidebar.js'
import Nav from './www/Shared/Nav.js'

import localdb from './www/Services/LocalDB.js'
import nav from './www/Services/NavObj.js'

const routes = [
  { path: '/post/:postId', component: Post },
  { path: '/intention/:intentions', component: Intentions },
  { path: '/material/:materials', component: Materials },
  { path: '/about', component: About },
  { path: '/post', component: Intentions },
  { path: '/intention', component: Intentions },
  { path: '/material', component: Materials },
  { path: '*', component: Home }
]

onload = () => {
  const router = new VueRouter({ routes })
  
  const app = new Vue({
    router,
    components: {
      'sidebar': Sidebar,
      'mobile': Nav
    },
    created: function () {
      addEventListener('hashchange', e => this.nav.updateHash())
      this.nav.updateHash()
    },
    data: function () {
      return { nav, localdb }
    }
  }).$mount('#app')
}