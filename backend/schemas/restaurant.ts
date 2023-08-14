export default {
    name: 'restaurant',
    type: 'document',
      title: 'Restaurant',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Restaurant´s name',
        validation: (Rule: any) => Rule.isRequired(),
      },
      {
        name: 'short_description',
        type: 'string',
        title: 'Short description',
        validation: (Rule: any) => Rule.isRequired(),
      },
      {
        name: 'image',
        type: 'image',
        title: 'Restaurant´s image',
        validation: (Rule: any) => Rule.isRequired(),
      },
      {
        name: 'lat',
        type: 'number',
        title: 'Restaurant´s Latitude',
      },
      {
        name: 'lng',
        type: 'number',
        title: 'Restaurant´s longitude',
      },
      {
        name: 'address',
        type: 'string',
        title: 'Restaurant´s address',
        validation: (Rule: any) => Rule.isRequired(),
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Restaurant´s rating',
        validation: (Rule: any) => Rule.min(1).max(5).error('Please enter a value between 1 and 5.'),
      },
      {
        name: 'type',
        type: 'reference',
        title: 'Restaurant´s category',
        to: [{ type: 'category' }],
        validation: (Rule: any) => Rule.isRequired(),
      },
      {
        name: 'dishes',
        type: 'array',
        title: 'Restaurant´s dishes',
        of: [{ type: 'reference', to: [{ type: 'dish' }] }]
      },
    ]
  };
