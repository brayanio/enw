import posts from '../../posts/posts.js'
import Post from '../Shared/Post.js'

import localdb from '../Services/LocalDB.js'
import nav from '../Services/NavObj.js'

export default {
components: {
  'post': Post
},
data: function() {
  return { posts, nav, localdb }
},
methods: {
  clearLocalStorage: function(){
    this.localdb.clearAll()
  },
  postLink: function(name) {
    return `#/intention/${name}`
  }
},
template:`
  <div class="d-col gradient-y page t-h9 y-scroll post_page">
    <section>
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
      <hr>
      <div class="center">
        <p class="raleway w8">
          <a href="https://www.merriam-webster.com/dictionary/erudite" target="_blank">Erudites</a> of the new world is a tool to plan a manifestation. This is due to our unique <a href="#/intention">Intention Organizer</a>. We search for the spiritual properties of our 3d world such as colors, sounds, flowers, crystals, zodiacs, etc and provide articles matching your intention. So if your intention is to make action, then you can learn about the fire element, the best days according to your horoscope, colors you should surround yourself with, and even some exercises, all in one place.
        </p>
      </div>
    </section>
  </div>
`
}