import React from 'react';
import MovieForm from './MovieForm';
import Dialog from '../Dialog/Dialog';


export default {
  title: 'Components/MovieForm',
  component: MovieForm,
};

const Template = (args) => <MovieForm {...args} />;
const DialogTemplate = (args) => <Dialog {...args} />;

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


//Add composition to use Dialog Component

export const AddMovieDialog = DialogTemplate.bind({});
AddMovieDialog.args = {
  title: 'Add Movie',
  onClose: () => alert("Dialog closed"),
  children: <MovieForm onSubmit={(data) => alert(`Submitted: ${JSON.stringify(data)}`)} />,
};

export const EditMovieDialog = DialogTemplate.bind({});
EditMovieDialog.args = {
  title: 'Edit Movie',
  onClose: () => alert("Dialog closed"),
  children: (
    <MovieForm
      initialMovie={{
        name: 'Inception',
        releaseYear: 2010,
        rating: 'PG-13',
        duration: '2h 28m',
        description: 'A mind-bending thriller about dream invasion.',
      }}
      onSubmit={(data) => alert(`Submitted: ${JSON.stringify(data)}`)}
    />
  ),
};

export const DeleteMovieDialog = DialogTemplate.bind({});
DeleteMovieDialog.args = {
  title: 'Delete Movie',
  onClose: () => alert("Dialog closed"),
  children: (
    <div>
      <p>Are you sure you want to delete this movie?</p>
      <button onClick={() => alert("Movie Deleted")}>Confirm</button>
    </div>
  ),
};
