import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

import {structure} from './src/desk'
import {schemaTypes} from './src/schemas'

export default defineConfig({
  name: 'default',
  title: 'shop',

  projectId: 't9d4z56p',
  dataset: 'production',

  plugins: [deskTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
