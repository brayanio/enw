import Nav from '../Shared/Nav.js'
import posts from '../../posts/posts.js'

export default {
components: {
  'page-nav': Nav
},
computed: {
  post: function () {
    return posts[this.$route.params.postId]
  },
  breadcrumbs: function () {
    return [ 
      {name: 'Home', path: '#/home'}, 
      {name: this.post.title, path: `#/post/${this.post.id}`, active: true}
    ]
  }
},
template:`
  <div>
    <div class="flex list post">
      <h1 class="gutter">{{ post.title || '' }}</h1>
      <small class="right gutter">
        <i>{{post.date}}</i>
      </small>
      <section id="html" v-html="post.html">Loading...</section>
    </div>
    <page-nav v-bind:breadcrumbs="breadcrumbs"></page-nav>
  </div>
`
}