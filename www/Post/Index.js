import posts from '../../posts/posts.js'

export default {
computed: {
  post: function () {
    return posts[this.$route.params.postId]
  }
},
template:`
  <div class="flex list post d-col g1 t-h9 y-scroll post_page">
    <div class="part text-w">
      <h1 class="gutter">{{ post.title || '' }}</h1>
      <small class="right gutter">
        <i>{{post.date}}</i>
      </small>
    </div>
    <section id="html" v-html="post.html">Loading...</section>
  </div>
`
}