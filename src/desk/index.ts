import {ListItemBuilder, StructureResolver} from 'sanity/desk'

import home from "./home"

const DOCUMENT_TYPES_IN_STRUCTURE = [
 
  'home',

]


export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      home(S, context),
      S.divider(),
     
      // Automatically add new document types to the root pane
      ...S.documentTypeListItems().filter(
        (listItem: ListItemBuilder) =>
          // @ts-expect-error Object is possibly 'undefined'
          !DOCUMENT_TYPES_IN_STRUCTURE.includes(listItem.getId().toString())
      ),
    ])
