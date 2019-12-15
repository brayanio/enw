import QuickNav from './QuickNav.js'

import localdb from '../Services/LocalDB.js'
import nav from '../Services/NavObj.js'

export default {
components: {
  'quick-nav': QuickNav
},
data: function() {
  return { nav, localdb }
},
methods: {
  toggle: () => Minima.toggleMobile(document.querySelector('#mobile'))
},
template:`
  <div class="d-hidden">
    <nav class="space-between align-center">
      <a class="flex align-center" href="#/home">
        <img src="./assets/enw-ico.jpg" width="64px">
      </a>
      <quick-nav class="flex x-scroll reverse" :mobile="true"></quick-nav>
    </nav>
    <div id="mobile" class="mobile d-hidden controls" v-on:click="toggle()">
      <a class="active" 
        :href="nav.hrefPage" 
        v-if="!nav.defaultPage">
        {{ nav.page }}
      </a>
      <hr v-if="!nav.defaultPage">
      <a v-for="link in nav.defaultNav"
        :href="link.href"
        :class="{ active: nav.isActiveHref(link.href) }">
        {{ link.page }}
      </a>
      <hr v-if="!nav.defaultHistory && nav.history">
      <a class="align-center center"
        v-if="!nav.defaultHistory && nav.history" 
        :href="nav.hrefHistory">
        <i class="material-icons gutter">history</i> {{ nav.history }}
      </a>
      <hr v-if="nav.bookmarks && nav.bookmarks.length > 0">
      <div class="y-scroll h3" 
        v-if="nav.bookmarks && nav.bookmarks.length > 0">
        <a class="align-center center" 
          v-for="(bookmark, i) in nav.bookmarks" 
          v-bind:class="{ active: nav.isActiveHref(bookmark.href) }"
          v-bind:href="bookmark.href">
            <i class="material-icons gutter">bookmark</i> {{ bookmark.page }}
        </a>
      </div>
    </div>
  </div>
`
}

// <button i0="menu" class="d-hidden flex align-center" :click="toggle()">
//   <i class="material-icons">menu</i>
// </button>