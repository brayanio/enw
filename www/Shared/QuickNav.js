import localdb from '../Services/LocalDB.js'
import nav from '../Services/NavObj.js'

export default {
computed: {
  isOpen: function() {
    return this.mobile || this.localdb.val.sidebarOpen
  }
},
data: function(){
  return { nav, localdb }
},
methods: {
  toggleOpen: function(val) {
    this.localdb.save.sidebarOpen(val)
  },
  toggleMobile: function() {
    Minima.toggleMobile(document.querySelector('#mobile'))
  }
},
props:['mobile', 'cta'],
template:`
  <div>
    <a v-if="!mobile && !isOpen" class="enw-icon-mini" href="#/home">
      <img src="./assets/enw-ico.jpg">
    </a>
    <button class="align-center flex" 
      v-if="!mobile"
      @click="toggleOpen(!isOpen)">
      <i class="material-icons">{{isOpen ? 'chevron_left' : 'chevron_right'}}</i>
    </button>
    <button class="align-center flex" 
      v-if="mobile"
      @click="toggleMobile()">
      <i class="material-icons">arrow_upward</i>
    </button>
    <a class="oval align-center flex" 
      :href="nav.hrefHistory" 
      v-if="!isOpen && nav.history">
      <i class="material-icons">history</i>
    </a>
    <hr v-if="!isOpen">
    <button class="align-center flex r1" 
      v-if="nav.bookmarked" 
      @click="nav.removeBookmark()">
      <i class="material-icons">delete</i>
    </button>
    <button class="align-center flex g1" 
      v-if="!nav.bookmarked && nav.page != 'Home'" 
      @click="nav.addBookmark()">
      <i class="material-icons">bookmark</i>
    </button>
    <hr v-if="!isOpen && nav.page != 'Home'">
    <a class="oval align-center flex bookmark"
      v-if="!isOpen"
      v-for="(bookmark, i) in nav.bookmarks" 
      :class="{ active: nav.isActiveHref(bookmark.href) }"
      :href="bookmark.href">
      <span class="bookmark_index">{{ i + 1 }}</span>
      <i class="material-icons">bookmark</i>
    </a>
  </div>
`
}