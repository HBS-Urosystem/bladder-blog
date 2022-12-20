export default {
  widgets: [
    {
      name: 'document-list',
      options: {title: 'Latest Posts', order: '_createdAt desc', types: ['post']},
      createButtonText: 'Create new Blog Post',
      layout: {width: 'medium'}
    },
    {
      name: 'document-list',
      options: {title: 'Latest Events', order: '_createdAt desc', types: ['event']},
      createButtonText: 'Create new Event',
      layout: {width: 'small'}
    },
    {
      name: 'project-users', 
      layout: {width: 'auto'}
    },
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Bladder Blog ',
            apiId: '251d4948-751f-433d-9d31-12156f8fcd79',
            buildHookId: '632ae8866a78db142f70906d',
            name: 'bladder-blog',
            url: 'https://urosystem.com/blog',
          },
          {
            title: 'Events + Hírlevél ',
            apiId: '7bcd2664-b0d3-4cb6-9fa3-93c25dec4f7a',
            buildHookId: '632b212df5593f4cfaf2c445',
            name: 'urosystem',
            url: 'https://urosystem.com/events',
          }
        ]
      },
      layout: {width: 'medium'}
    },
  ]
}