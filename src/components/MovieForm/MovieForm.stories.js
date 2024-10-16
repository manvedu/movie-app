import React from 'react';
import MovieForm from './MovieForm';

export default {
  title: 'Components/MovieForm',
  component: MovieForm,
};

const Template = (args) => <MovieForm {...args} />;

export const AddMovie = Template.bind({});
AddMovie.args = { onSubmit: (data) => alert(JSON.stringify(data)) };

export const EditMovie = Template.bind({});
EditMovie.args = {
  initialMovie: {
    name: 'Inception',
    releaseYear: 2010,
    rating: 'PG-13',
    duration: '2h 28m',
    description: 'A mind-bending thriller about dream invasion.',
  },
  onSubmit: (data) => alert(JSON.stringify(data)),
};
