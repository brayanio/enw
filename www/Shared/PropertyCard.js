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
props: [],
template:`
  <section class="flex">
    
  </section>
`
}