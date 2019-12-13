export default {
props: ['breadcrumbs'],
template:`
  <nav class="space-between align-center">
    <a class="flex align-center" href="#/home">
      <img src="./assets/enw-ico.jpg" width="64px">
    </a>
    <div class="tab-select">
      <a v-for="crumb in breadcrumbs" 
        v-bind:href="crumb.path"
        v-bind:class="{ active: crumb.active }">{{ crumb.name }}</a>
    </div>
  </nav>
`
}