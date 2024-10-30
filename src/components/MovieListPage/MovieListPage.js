import React, { useState, useEffect } from 'react';
import SearchForm from './../SearchForm/SearchForm';
import MovieDetails from './../MovieDetails/MovieDetails';
import GenreSelect from './../GenreSelect/GenreSelect';
import SortControl from './../SortControl/SortControl';
import MovieTile from './../MovieTile/MovieTile';

const MovieListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriterion, setSortCriterion] = useState('release_date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [activeGenre, setActiveGenre] = useState('All');
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchMovies = async () => {
      try {
        const params = new URLSearchParams({
          sortBy: sortCriterion,
          sortOrder: sortOrder,
          search: searchQuery,
          searchBy: 'title',
          filter: activeGenre !== 'All' ? activeGenre : '',
          limit: 10,
        });

        const response = await fetch(`http://localhost:4000/movies?${params.toString()}`, { signal, headers: { 'accept': 'application/json' } });
        
        if (!response.ok) throw new Error('Failed to fetch movies');

        const data = await response.json();
        setMovieList(data.data);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Fetch error:', error);
        }
      }
    };

    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [searchQuery, sortCriterion, sortOrder, activeGenre]);

  const handleSearchSubmit = (query) => setSearchQuery(query);
  const handleGenreSelect = (genre) => setActiveGenre(genre);
  const handleSortChange = (criterion) => setSortCriterion(criterion);
  const handleMovieSelect = (movie) => setSelectedMovie(movie);

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
