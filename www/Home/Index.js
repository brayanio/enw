import Post from '../Shared/Post.js'

import posts from '../Services/posts.js'
import localdb from '../Services/LocalDB.js'
import nav from '../Services/NavObj.js'

export default {
components: {
  'post': Post
},
data: function() {
  return { posts, nav, localdb }
},
methods: {
  clearLocalStorage: function(){
    this.localdb.clearAll()
  },
  postLink: function(name) {
    return `#/intention/${name}`
  }
},
template:`
  <div class="d-col gradient-g page t-h9 y-scroll">
    <section>
      <strong class="flex">New Posts</strong>
      <post v-for="postObj of posts" 
        :post="postObj"
        :tagHref="postLink"
        :key="postObj.title">
      </post>
    </section>
  </div>
`
}