import React from 'react';
import GenreSelect from './GenreSelect';

export default {
  title: 'GenreSelect',
  component: GenreSelect,
};

const Template = (args) => <GenreSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  genres: ['Action', 'Comedy', 'Drama'],
  selectedGenre: 'Action',
  onSelect: (genre) => console.log(`Selected genre: ${genre}`),
};
