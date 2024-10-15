import './App.css';
import React, { useState } from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import Counter from './components/Counter/Counter';
import GenreSelect from './components/GenreSelect/GenreSelect';
import MovieTile from './components/MovieTile/MovieTile';
import MovieDetails from './components/MovieDetails/MovieDetails';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleGenreSelect = (genre) => {
  };

  const handleSearchForm = (query) => {
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBackToMovies = () => {
    setSelectedMovie(null);
  };

  const movies = [
    {
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BYjkwNzVlNDEtMTJlNy00OTdlLTljYWItM2RkZmZkYzY3YjM2XkEyXkFqcGc@._V1_.jpg',
      name: 'Beetlejuice',
      releaseYear: 1988,
      genres: ['Fantasy', 'Thriller'],
      duration: '2h 10m',
      rating: 'PG-21',
      description: 'Fantasy movie about monsters and dead'
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8haqYjg88LqY_9EmrbndT8Hvy2LV59e_awdNrRoq0tiSZlvWDwdF9qvVdbLnScEujDXs&usqp=CAU',
      name: 'The substance',
      releaseYear: 2024,
      genres: ['Horror', 'Dark Comedy'],
      duration: '2h 14m',
      rating: 'PG-21',
      description: 'A movie about horros in industry to show you young'
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcUX0_REeWx8Rb4k61DMQxVpAzHvr6m5FZrs9-pHhbJiqRfQ6cygCLVmM8tWzoykYECOE&usqp=CAU',
      name: 'The wild robot',
      releaseYear: 2024,
      genres: ['Animation', 'Sci-Fi'],
      duration: '1h 48m',
      rating: 'PG-8',
      description: 'Shows the adventures of a robot in the wild'
    },
    {
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMzg0MWUzMjctYjVlOS00NzVjLWIwZDMtNzg1YzNkYzdjNTMwXkEyXkFqcGc@._V1_.jpg',
      name: 'Puss in Boots: The Last Wish',
      releaseYear: 2022,
      genres: ['Adventure', 'Animation'],
      duration: '1h 28m',
      rating: 'PG-8',
      description: 'Shows the fears of the puss in boots and how with this friends he can continue his life'
    },
    {
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjNjNjMxOGQtY2EwNi00ZGZiLWJhNmYtMDRjMGZjODdlNjAwXkEyXkFqcGc@._V1_.jpg',
      name: 'One Hundred Years of Solitude',
      releaseYear: 2024,
      genres: ['Historical', 'Fantasy'],
      duration: '2h 28m',
      rating: 'PG-18',
      description: 'Story about the Gabriel Garcia book'
    },
  ];

  return (
    <div className="App">
      <div className="main-container">
        <SearchForm initialQuery="Scary movie" onSearch={handleSearchForm} />
        <GenreSelect
          genres={['All', 'Action', 'Comedy', 'Drama']}
          selectedGenre="All"
          onSelect={handleGenreSelect}
        />
        <Counter initialValue={0} />
        <div>
          {selectedMovie ? (
            <div>
              <button onClick={handleBackToMovies}>Back to Movies</button>
              <MovieDetails movie={selectedMovie} />
            </div>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {movies.map((movie, index) => (
                <MovieTile key={index} movie={movie} onClick={() => handleMovieClick(movie)} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

