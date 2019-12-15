import QuickNav from './QuickNav.js'

import localdb from '../Services/LocalDB.js'
import nav from '../Services/NavObj.js'

export default {
components: {
  'quick-nav': QuickNav
},
computed: {
  isOpen: function() {
    return this.localdb.val.sidebarOpen
  }
},
data: function(){
  return { nav, localdb }
},
methods: {
  toggleOpen: function(val){
    this.localdb.save.sidebarOpen(val)
  }
},
template:`
<div class="t-hidden part" v-bind:class="{ w3: isOpen, gutter: !isOpen }">
  <quick-nav v-if="!isOpen"></quick-nav>
  <section class="part h10 sidebar" v-bind:class="{ closed: !isOpen }">
    <div class="flex align-center">
      <div class="gutter">
        <img src="./assets/enw-ico.jpg" width="64px">
      </div>
      <div class="text-group gutter col">
        <strong>
          <p>Erudites</p>
          <p> of the</p>
          <p> New World</p>
        </strong>
        <p>The new world blog</p>
      </div>
    </div>
    <quick-nav v-if="isOpen" class="flex col x-scroll reverse"></quick-nav>
    <section class="flex list part ml mr">
      <hr>
      <a class="edge" 
        v-for="link in nav.defaultNav"
        v-bind:href="link.href" 
        v-bind:class="{ active: nav.isActiveNav(link.page) }">
        {{ link.page }}
      </a>
      <hr v-if="!nav.defaultPage || (nav.history && !nav.defaultHistory)">
      <a class="edge active" v-bind:href="nav.hrefPage" v-if="!nav.defaultPage">{{ nav.page }}</a>
      <a class="edge align-center flex"
        v-if="nav.history && !nav.defaultHistory" 
        v-bind:href="nav.hrefHistory">
        <i class="material-icons gutter">history</i> {{ nav.history }}
      </a>
      <hr v-if="nav.bookmarks && nav.bookmarks.length > 0">
      <a class="edge align-center flex" 
        v-for="(bookmark, i) in nav.bookmarks" 
        v-bind:class="{ active: nav.isActiveHref(bookmark.href) }"
        v-bind:href="bookmark.href">
          <i class="material-icons gutter">bookmark</i> {{ bookmark.page }}
      </a>
    </section>
  </section>
</div>
`
}