import './App.css';
import SearchForm from './components/SearchForm';
import Counter from './components/Counter';
import GenreSelect from './components/GenreSelect';

function App() {
  const handleGenreSelect = (genre) => {
    console.log('Selected genre:', genre);
  };

  return (
    <div className="App">
      <div className="main-container">
        <SearchForm initialQuery="Scary movie" onSearch={(query) => console.log(query)} />
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

