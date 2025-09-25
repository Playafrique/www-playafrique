import { defineConfig } from 'sanity'
import { env } from '@/env'
import { media } from 'sanity-plugin-media'
import { schemaTypes } from './sanity/schemaTypes'
import { structure } from './sanity/structure'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

export default defineConfig({
    name: 'default',
    title: 'Play Afrique',

    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,

    basePath: '/studio',

    plugins: [
        structureTool({
            structure,
        }),
        visionTool({
            defaultApiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,
        }),
        media(),
    ],

    schema: {
        types: schemaTypes,
    },
})
