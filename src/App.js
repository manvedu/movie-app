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
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BYjkwNzVlNDEtMTJlNy00OTdlLTljYWItM2RkZmZkYzY3YjM2XkEyXkFqcGc@._V1_.jpg',
      name: 'Beetlejuice',
      releaseYear: 1988,
      genres: ['Fantasy', 'Thriller'],
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8haqYjg88LqY_9EmrbndT8Hvy2LV59e_awdNrRoq0tiSZlvWDwdF9qvVdbLnScEujDXs&usqp=CAU',
      name: 'The substance',
      releaseYear: 2024,
      genres: ['Horror', 'Dark Comedy'],
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcUX0_REeWx8Rb4k61DMQxVpAzHvr6m5FZrs9-pHhbJiqRfQ6cygCLVmM8tWzoykYECOE&usqp=CAU',
      name: 'The wild robot',
      releaseYear: 2024,
      genres: ['Animation', 'Sci-Fi'],
    },
    {
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMzg0MWUzMjctYjVlOS00NzVjLWIwZDMtNzg1YzNkYzdjNTMwXkEyXkFqcGc@._V1_.jpg',
      name: 'Puss in Boots: The Last Wish',
      releaseYear: 2022,
      genres: ['Adventure', 'Animation'],
    },
    {
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjNjNjMxOGQtY2EwNi00ZGZiLWJhNmYtMDRjMGZjODdlNjAwXkEyXkFqcGc@._V1_.jpg',
      name: 'One Hundred Years of Solitude',
      releaseYear: 2024,
      genres: ['Historical', 'Fantasy'],
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

