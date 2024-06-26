import { defineField } from 'sanity';

const profile = {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'A picture of yourself',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alternative Text', type: 'string' }],
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
      rows: 4,
    },
    {
      name: 'fullBio',
      title: 'Full Bio',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
};

export default profile;
