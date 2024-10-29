import React, { useState } from 'react';
import SearchForm from './../SearchForm/SearchForm';
import MovieDetails from './../MovieDetails/MovieDetails';
import GenreSelect from './../GenreSelect/GenreSelect';
import SortControl from './../SortControl/SortControl';
import MovieTile from './../MovieTile/MovieTile';

const MovieListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriterion, setSortCriterion] = useState('Release Date');
  const [activeGenre, setActiveGenre] = useState('All');
  const [movieList, setMovieList] = useState([
    {
      id: 1,
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

  ]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Handle search
  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    console.log('SearchSubmit');
    // Apply search logic here
  };

  // Handle genre selection
  const handleGenreSelect = (genre) => {
    setActiveGenre(genre);
    console.log('GenreSelect');
    // Apply genre filtering logic here
  };

  // Handle sorting selection
  const handleSortChange = (criterion) => {
    setSortCriterion(criterion);
    console.log('SortChange');
    // Apply sorting logic here
  };

  // Handle movie selection
  const handleMovieSelect = (movie) => {
    console.log('MovieSelect');
    setSelectedMovie(movie);
  };

  // Render either MovieDetails or SearchForm based on selectedMovie
  return (
    <div className="movie-list-page">
      <header>
        <h1>Find Your Movie</h1>
        {selectedMovie ? (
          <MovieDetails movie={selectedMovie} />
        ) : (
          <SearchForm initialQuery={searchQuery} onSearch={handleSearchSubmit} />
        )}
      </header>
      <div className="controls">
        <GenreSelect
          genres={['All', 'Documentary', 'Comedy', 'Horror', 'Crime']}
          activeGenre={activeGenre}
          onSelect={handleGenreSelect}
        />
        <SortControl
          currentCriterion={sortCriterion}
          onSelectionChange={handleSortChange}
        />
      </div>
      <div className="movie-list">
        {movieList.map((movie) => (
          <MovieTile
            key={movie.id}
            movie={movie}
            onClick={() => handleMovieSelect(movie)}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieListPage;
