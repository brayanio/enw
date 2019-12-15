let cache

function clearAll () {
  for(let key in this.clear)
    this.clear[key]()
}

cache = {save: {}, clear: {}, val: {}, clearAll }

const db = (name, obj, empty) => {
  if(obj === undefined && localStorage[name] === undefined)
    console.log('db *new*', name, obj, localStorage[name])
  if((obj !== undefined) || (!localStorage[name] && empty)){
    localStorage[name] = JSON.stringify(obj !== undefined ? obj : empty)
    console.log('db *save*', name, localStorage[name])
  }
  if((localStorage[name] !== undefined) || empty){
    cache.val[name] = JSON.parse(localStorage[name] !== undefined ? localStorage[name] : empty)
    console.log('db *load*', name, cache.val[name])
  }
  if(!cache.save[name])
    cache.save[name] = function (obj) { return db(name, obj, empty) }
  if(!cache.clear[name])
    cache.clear[name] = function () {
      if(localStorage[name]) {
        delete localStorage[name]
        cache.val[name] = undefined
      }
    }
  return cache.val[name]
}

db('bookmarks', undefined, [])
db('sidebarOpen', undefined, true)
db('intentionSearch', undefined, true)

export default cache