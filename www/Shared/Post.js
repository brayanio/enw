import Tag from './Tag.js'

export default {
components: {
  'tag': Tag
},
methods: {
  getTagHref: function (name) {
    if(!this.tagHref) return this.tagHref
    return this.tagHref(name)
  }
},
props: ['post', 'tagCta', 'tagHref'],
template:`
  <section class="flex">
    <img v-if="post.clickbait" v-bind:src="post.clickbait" class="post_img">
    <div class="text-group space-between col">
      <div>
        <p><a v-bind:href="'#/post/' + post.id"><strong>{{ post.title }}</strong></a></p>
        <p>
          <tag v-for="tag in post.tags"
            :tag="tag"
            :href="getTagHref(tag)"
            :cta="tagCta"
            :key="tag">
            {{ tag }}
          </tag>
        </p>
      </div>
      <div>
        <p class="right"><small>{{ post.date }}</small></p>
      </div>
    </div>
  </section>
`
}