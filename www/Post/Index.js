import Tag from '../Shared/Tag.js'

import posts from '../Services/posts.js'

export default {
components: {
  'tag': Tag
},
computed: {
  post: function () {
    return posts[this.$route.params.postId]
  }
},
methods: {
  getTagHref: function (name) {
    return `#/intention/${name}`
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
  <div class="flex list post d-col gradient-o t-h9 y-scroll post_page">
    <div class="part mt ml mr">
      <h1 class="gutter">{{ post.title || '' }}</h1>
    </div>
    <section v-if="post.html" v-html="post.html">Loading...</section>
    <section v-if="post.template" ref="template"></section>
    <section>
      <div>
        <p> 
          <strong>Tags</strong>
          <br>
          <tag v-for="tag in post.tags"
            :tag="tag"
            :href="getTagHref(tag)"
            :key="tag">
            {{ tag }}
          </tag>
          <hr v-if="post.source">
          <strong v-if="post.source">Sources</strong>
          <ul v-if="post.source">
            <li v-for="s of post.source">
              <a :href="s.href" target="_blank"><strong>{{s.name}}</strong></a>
            </li>
          </ul>
          <hr v-if="post.research">
          <strong v-if="post.research">Continue Research</strong>
          <ul v-if="post.research">
            <li v-for="s of post.research">
              <a :href="s.href" target="_blank"><strong>{{s.name}}</strong></a>
            </li>
          </ul>
          <strong class="right">Author</strong>
          <small class="right">{{post.author}}</small>
          <strong class="right">Date</strong>
          <small class="right"><i>{{post.date}}</i></small>
        </p>
      </div>
    </section>
  </div>
`
}