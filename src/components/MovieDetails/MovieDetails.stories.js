import React from 'react';
import MovieDetails from './MovieDetails';

export default {
  title: 'Components/MovieDetails',
  component: MovieDetails,
};

const Template = (args) => <MovieDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  movie: {
    imageUrl: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
    name: 'Inception',
    releaseYear: 2010,
    rating: 'PG-13',
    duration: '2h 28m',
    description: 'A mind-bending thriller where dream invasion becomes a new form of corporate espionage.',
  },
};
