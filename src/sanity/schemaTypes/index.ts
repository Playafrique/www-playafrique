import { type SchemaTypeDefinition } from 'sanity'
import contentBlock from './objects/contentBlock'
import gallery from './objects/gallery'
import category from './objects/category'
import product from './documents/product'
import post from './documents/post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // object schemas
    contentBlock,
    gallery,
    
    // document schemas
    product,
    post,
    category,
  ],
}
