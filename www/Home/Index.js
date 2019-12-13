import Nav from '../Shared/Nav.js'
import posts from '../../posts/posts.js'

export default {
components: {
  'page-nav': Nav
},
data: function() {
  return { posts,
    breadcrumbs: [ 
      {name: 'Home', path: '#/home', active: true}
    ]
  }
},
template:`
  <div>
    <div class="flex">
      <div class="w2 t-hidden"></div>
      <div class="t-col d-w8">
        <div class="flex align-center">
          <div class="gutter">
            <img src="./assets/enw-ico.jpg" width="64px">
          </div>
          <div class="text-group gutter">
            <strong>
              <p>Erudites</p>
              <p> of the</p>
              <p> New World</p>
            </strong>
            <p>The new world blog</p>
          </div>
        </div>
        <section class="g1">
          <strong class="text-w">New Posts</strong>
          <section v-for="post in posts">
            <div class="text-group space-between">
              <div>
                <p><a v-bind:href="'#/post/' + post.id"><strong>{{ post.title }}</strong></a></p>
                <p>
                  <span v-for="tag in post.tags" class="tag">{{ tag }}</span>
                </p>
              </div>
              <div>
                <p class="right"><small>{{ post.date }}</small></p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
    <page-nav v-bind:breadcrumbs="breadcrumbs"></page-nav>
  </div>
`
}