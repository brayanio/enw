import tagData from '../Services/tags.js'

export default {
computed: {
  meta: function() {
    if(this.tagData[this.tag])
      return this.tagData[this.tag]
    return {classList: ''}
  } 
},
data: function(){ return { tagData } },
props: ['tag', 'href', 'cta'],
template:`
  <span>
    <a class="tag" 
      v-if="href" 
      :href="href" 
      :class="meta.classList">
      <slot></slot>
    </a>
    <button class="tag" 
      v-if="cta"
      @click="cta(tag)" 
      :class="meta.classList"
      type="button">
      <slot></slot>
    </button>
    <span class="tag" 
      v-if="!cta && !href" 
      :class="meta.classList">
      <slot></slot>
    </span>
  </span>
`
}