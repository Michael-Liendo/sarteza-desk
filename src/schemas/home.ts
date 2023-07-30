import { defineField } from "sanity";
import {HomeIcon} from '@sanity/icons'

const TITLE = "Home"

export default defineField({
  name:'home',
  title: TITLE,
  type:'document',  
  icon: HomeIcon,
  groups: [{default:true, name:'editorial', title:'Editorial'}],
  fields: [defineField({name:'hero', type:'string', group:'editorial'})],
  preview: {
    prepare() {
      return {
        // media: icon,
        subtitle: 'Index',
        title: TITLE,
      }
    },
  }})