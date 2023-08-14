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
    ]
  };
