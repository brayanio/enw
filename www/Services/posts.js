//posts
import AlternativeMilks from '../../posts/AlternativeMilks.js'
import WhatsTheBestMilk from '../../posts/WhatsTheBestMilk.js'
import PropertiesOfFruit from '../../posts/PropertiesOfFruit.js'
//templates
import PList from '../Shared/PostTemplates/PList.js'

const posts = {
  WhatsTheBestMilk,
  AlternativeMilks,
  PropertiesOfFruit
}

const components = {
  PList
}

Object.values(posts).forEach(post => 
  post.template ? post.template.component = components[post.template.component] : undefined)

export default posts