import './App.css';
import SearchForm from './components/SearchForm/SearchForm';
import Counter from './components/Counter/Counter';
import GenreSelect from './components/GenreSelect/GenreSelect';

function App() {
  const handleGenreSelect = (genre) => {
  };

  const handleSearchForm = (query) => {
  };

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
      </div>
    </div>
  );
}

export default App;

