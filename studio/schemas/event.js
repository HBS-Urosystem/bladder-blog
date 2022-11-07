export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    /*{
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },*/
    /*{
      name: 'keywords',
      title: 'Key words',
      type: 'array',
      of: [{type: 'string'}],
    },*/
    {
      name: 'date1',
      title: 'Start date',
      description: 'Only date part is used',
      type: 'datetime',
    },
    {
      name: 'date2',
      title: 'End date (optional)',
      description: 'Only date part is used',
      type: 'datetime',
      validation: Rule => Rule.min(Rule.valueOfField('date1'))
    },
    /*{
      name: 'imageHero',
      title: 'Hero image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },*/
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'gridImage'}]
    },
    /*{
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: Rule => Rule.max(200).warning('The description shouln\'t be longer than 200 characters'),
    },*/
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      /*media: 'imageHero',*/
    },
  },
}
