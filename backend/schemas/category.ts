export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        validation: (Rule: any) => Rule.isRequired(),
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image of the category',
        validation: (Rule: any) => Rule.isRequired(),
      },
    ]
  };
