console.log('CAPTIMG')
export default {
  title: 'Image',
  name: 'captionImage',
  type: 'image',
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Image caption',
      options: {
        isHighlighted: true
      }
    },
  ],
  initialValue: {
    preview: true,
    hero: true,
  },
  liveEdit: true
}
