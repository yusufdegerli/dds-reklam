import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projeler',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Proje Başlığı',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Yapısı (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Kampanya', value: 'campaign' },
          { title: 'Dijital', value: 'digital' },
          { title: 'Prodüksiyon', value: 'production' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Kısa Açıklama (Kartta gözükecek)',
      type: 'string',
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: 'description',
      title: 'Detaylı Açıklama (Tıklayınca açılacak)',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Proje Görselleri',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.required().min(1).max(5).error('En az 1, en fazla 5 görsel yükleyebilirsiniz.'),
    }),
  ],
})
