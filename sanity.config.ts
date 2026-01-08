import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schema'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'yok';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'DDS Reklam Admin',

  projectId: projectId,
  dataset: dataset,
  basePath: '/studio', // Admin paneli bu adreste çalışacak

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
