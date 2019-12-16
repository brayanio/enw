import postData from '../../posts/posts.js'
import Post from '../Shared/Post.js'
import Tag from '../Shared/Tag.js'

import localdb from '../Services/LocalDB.js'

export default {
components: {
  'post': Post,
  'tag': Tag
},
computed: {
  tags: function(){
    let ar = []
    for(let post in this.postData){
      ar = ar.concat(this.postData[post].tags)
    }
    return [...new Set(ar)].filter(tag => tag.includes(this.search.toLowerCase()))
  },
  posts: function(){
    return Object.values(this.postData).filter(post => post.tags.find(t => this.selected.includes(t)))
  },
  selected: function () {
    let tags = []
    if(this.$route.params.intentions) tags = this.$route.params.intentions.split(',')
    return tags
  },
  intentionSearch: function() {
    return this.localdb.val.intentionSearch
  }
},
data: function() {
  return { 
    postData,
    search: '',
    localdb
  }
},
methods: {
  selectTag: function (name) {
    if(!this.selected.includes(name)){
      if(this.selected.length > 0)
        return location.hash = `#/intention/${this.selected.join(',')},${name}`
      location.hash = `#/intention/${name}`
    }
  },
  unselectTag: function (name) {
    if(this.selected.includes(name)){
      if(this.selected.length > 0)
        return location.hash = `#/intention/${this.selected.filter(t => t !== name).join(',')}`
      location.hash = `#/intention`
    }
  }
},
template:`
  <div class="d-col gradient-i page t-h9 y-scroll">
    <section>
      <div class=" space-between">
        <strong class="flex">Intention Organizer</strong>
        <button class="w3" 
          v-if="!intentionSearch && selected.length > 0" 
          @click="localdb.save.intentionSearch(true)">
          Search
        </button>
      </div>
      <form v-if="!selected.length > 0 || intentionSearch">
        <input placeholder="Search" class="col" @keyup="search = $event.target.value">
        <p>
          <tag v-for="tag in tags" 
          v-if="!selected.includes(tag)"
          :cta="selectTag"
          :tag="tag"
          :key="tag">
            {{ tag }} <i class="material-icons gutter">add_circle</i>
          </tag>
        </p>
        <div class="button-tray right" v-if="selected.length > 0">
          <button type="button" @click="localdb.save.intentionSearch(false)">Close</button>
        </div>
      </form>
      <p>
        <span v-if="selected.length == 0">None Selected</span>
        <tag v-for="tag in selected"
          :cta="unselectTag"
          :tag="tag"
          :key="tag">
          {{ tag }} <i class="material-icons gutter">remove_circle</i>
        </tag>
      </p>
      <post v-for="postObj of posts" 
        :post="postObj" 
        :tagCta="selectTag"
        :key="postObj.title">
      </post>
    </section>
  </div>
`
}