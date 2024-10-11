import './App.css';
import SearchForm from './components/SearchForm/SearchForm';
import Counter from './components/Counter/Counter';
import GenreSelect from './components/GenreSelect/GenreSelect';
import MovieTile from './components/MovieTile/MovieTile';

function App() {
  const handleGenreSelect = (genre) => {
  };

  const handleSearchForm = (query) => {
  };
  const movies = [
    {
      imageUrl: 'https://google.com',
      name: 'Movie 1',
      releaseYear: 2021,
      genres: ['Action', 'Adventure'],
    },
    {
      imageUrl: 'https://google.com',
      name: 'Movie 2',
      releaseYear: 2020,
      genres: ['Comedy', 'Drama'],
    },
    {
      imageUrl: 'https://google.com',
      name: 'Movie 3',
      releaseYear: 2019,
      genres: ['Horror', 'Thriller'],
    },
    {
      imageUrl: 'https://google.com',
      name: 'Movie 4',
      releaseYear: 2018,
      genres: ['Sci-Fi', 'Fantasy'],
    },
    {
      imageUrl: 'https://google.com',
      name: 'Movie 5',
      releaseYear: 2017,
      genres: ['Romance', 'Drama'],
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
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {movies.map((movie, index) => (
            <MovieTile key={index} movie={movie} onClick={() => alert(movie.name)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

