export default {
    name: 'dish',
    type: 'document',
    title: 'Dish',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name of the dish',
        validation: (Rule: any) => Rule.isRequired(),
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description of the dish',validation: (Rule: any) => Rule.isRequired(),
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image of the dish',
        validation: (Rule: any) => Rule.isRequired(),
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price of the dish',
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Rating of the dish',
        validation: (Rule: any) => Rule.min(1).max(5).error('Please enter a value between 1 and 5.'),
      },
    ]
  };
