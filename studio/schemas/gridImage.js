export default {
  title: 'Image',
  name: 'gridImage',
  type: 'image',
  fields: [
    {
      name: 'portray',
      type: 'boolean',
      title: 'Double height?',
      options: {
        isHighlighted: true
      }
    },
  ],
  initialValue: {
    //portray: false,
  },
  liveEdit: true
}
