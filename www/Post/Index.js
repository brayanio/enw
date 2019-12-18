import posts from '../Services/posts.js'

export default {
computed: {
  post: function () {
    return posts[this.$route.params.postId]
  }
},
mounted: function () {
  let template = this.$refs.template
  console.log('post *mounted*', template)
  if(this.post && this.post.template && template){
    let Component = Vue.extend(this.post.template.component)
    let instance = new Component({ propsData: this.post.template.props })
    instance.$mount() // pass nothing
    this.$refs.template.appendChild(instance.$el)
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
    <section v-if="post.html" v-html="post.html">Loading...</section>
    <section v-if="post.template" ref="template"></section>
  </div>
`
}