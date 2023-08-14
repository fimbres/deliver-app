export default {
    name: 'featured',
    type: 'document',
    title: 'Featured',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Featured category´s name',
        validation: (Rule: any) => Rule.isRequired(),
      },
      {
        name: 'short_description',
        type: 'string',
        title: 'Short description',
        validation: (Rule: any) => Rule.isRequired(),
      },
      {
        name: 'restaurants',
        type: 'array',
        title: 'Restaurants',
        of: [{ type: 'reference', to: [{ type: 'restaurant' }] }]
      },
    ]
  };
