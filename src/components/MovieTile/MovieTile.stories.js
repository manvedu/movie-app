import React from 'react';
import MovieTile from './MovieTile';

export default {
  title: 'Components/MovieTile',
  component: MovieTile,
};

const Template = (args) => <MovieTile {...args} />;

export const Default = Template.bind({});
Default.args = {
  movie: {
    imageUrl: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
    name: 'Inception',
    releaseYear: 2010,
    genres: ['Action', 'Sci-Fi'],
  },
  onClick: () => alert('Movie clicked!'),
};
