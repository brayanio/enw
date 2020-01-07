import localdb from './LocalDB.js'
import posts from './posts.js'

let nav, 
  bookmarks = localdb.val.bookmarks,
  defaultNav = [
    { page: 'Home', href: '#/home' }, 
    { page: 'Intention', href: '#/intention' },
    { page: 'Material', href: '#/material' }, 
    { page: 'About', href: '#/about' }
  ],
  defaultPages = defaultNav.map(e => e.page)

function isActiveNav (name) { return this.page == name }
function isActiveHref (href) { return this.hrefPage == href }
function addBookmark () {
  if(!this.bookmarked){
    this.bookmarks.push({page: this.page, href: this.hrefPage})
    this.bookmarks = localdb.save.bookmarks(this.bookmarks)
    this.updateBookmarks()
  }
}
function removeBookmark () {
  let bookmarks = localdb.val.bookmarks
  if(this.bookmarked){
    let bookmarkIndex
    bookmarks.find((b, i) => { if(b.href == this.hrefPage){ bookmarkIndex = i; return b } })
    bookmarks.splice(bookmarkIndex, 1)
    this.bookmarks = localdb.save.bookmarks(bookmarks)
    this.updateBookmarks()
  }
}
function updateHash () {
  let hash = location.hash + ''
  if(hash === '#/') hash = '#/home'
  this.hrefHistory = this.hrefPage + ''
  this.hrefPage = hash + ''
  hash = hash.substr(1)
  let hashAr = hash.split('/').filter(e=>e)
  hash = hashAr[hashAr.length - 1]
  console.log('hash', hash, hashAr)
  let post = posts[hash]
  this.history = this.page
  if(post) this.page = post.title
  else this.page = hash.substring(0, 1).toUpperCase() + hash.substring(1)
  this.defaultPage = this.defaultPages.includes(this.page)
  this.defaultHistory = this.defaultPages.includes(this.history)
  this.updateBookmarks()
}
function updateBookmarks () {
  const isBM = (ar, href) => (ar.find(b => b.href == href ) !== undefined)
  this.bookmarked = isBM(this.bookmarks, this.hrefPage)
  if(this.bookmarked)
    this.defaultPage = true
  if(this.history && isBM(this.bookmarks, this.hrefHistory))
    this.defaultHistory = true
}
function toJSON () {
  let obj = JSON.parse(JSON.stringify(this))
  for(let key of obj){
    if(typeof obj[key])
      delete obj[key]
  }
  return obj
}

nav = {
  page: undefined,
  hrefPage: undefined,
  history: undefined,
  hrefHistory: undefined,
  defaultPage: false,
  defaultHistory: false,
  bookmarked: false,
  defaultNav,
  defaultPages,
  bookmarks,
  // fn
  isActiveNav,
  isActiveHref,
  addBookmark,
  removeBookmark,
  updateHash,
  updateBookmarks,
  toJSON
}

export default nav