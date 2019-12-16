export default {
computed: {
  pFlagAr: function () {
    if(this.flag){
      if(this.p.length >= 3)
        return this.p.slice(0, 3)
      return this.p
    }
    return []
  },
  pAr: function () {
    if(this.flag && this.p.length > 0)
      return this.p.slice(3)
    return []
  },
},
props: ['p', 'flag'],
template:`
  <div>
    <div class="d-flex" v-if="flag">
      <img :src="flag" class="post-img-header">
      <div>
        <div v-for="(post, i) of pFlagAr" :key="post.html">
          <hr v-if="i != 0">
          <p v-html="post.html" :class="post.classList"></p>
        </div>
      </div>
    </div>
    <div v-for="post of pAr" :key="post.html" v-if="pAr">
      <hr>
      <p v-html="post.html" :class="post.classList"></p>
    </div>
  </div>
`
}