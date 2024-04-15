import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'
import Tracklist from './components/Tracklist'
import Track from './components/Track'
import BtnSaveToSpotify from './components/buttons/BtnSaveToSpotify'
import BtnSearch from './components/buttons/BtnSearch'
import data from './dataSpotify.json'

function App() {

  const [searchValue, setSearchValue] = useState('');
  const [listName, setListName] = useState('');
  const changeHandler = (newSong)=> {
    setSearchValue(newSong);
  };
  const listNameHandler = (input) => {
    setListName(input);
  };

  return (
    <>
      <div className='header'>
        <h1 className='title'>Jammming</h1>
        <SearchBar onChange={changeHandler} searchValue={searchValue} />
        <BtnSearch />
      </div>
      <div className='search-results'>
        <div className='left-side'>
          <Tracklist data={data} searchValue={searchValue} />
        </div>
        <div className='right-side'>
          <Playlist onChange={listNameHandler} listName={listName}/>
          <BtnSaveToSpotify listName={listName} />
        </div>
      </div>
      
    </>
  )
}

export default App
