import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import Playlist from './components/Playlist'
import Tracklist from './components/Tracklist'
import BtnSaveToSpotify from './components/buttons/BtnSaveToSpotify'
import BtnSearch from './components/buttons/BtnSearch'
import data from './dataSpotify.json'

function App() {

  // useState
  const [searchValue, setSearchValue] = useState('');
  const [listName, setListName] = useState('');
  const [playList, setPlayList] = useState([]);

  // Handlers
  const changeHandler = (newSong)=> {
    setSearchValue(newSong);
  };
  const listNameHandler = (input) => {
    setListName(input);
  };
  const addPlayList = (newObject) => {
    setPlayList([...playList, newObject]);
  };
  const removePlayList = (newObject) => {
    // setPlayList([...playList, newObject])
    console.log(playList)
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
          <Tracklist data={data} searchValue={searchValue} playListHandler={addPlayList} />
        </div>
        <div className='right-side'>
          <Playlist onChange={listNameHandler} listName={listName} playlist={playList} playListRemoveHandler={removePlayList} />
          <BtnSaveToSpotify listName={listName} />
        </div>
      </div>
      
    </>
  )
}

export default App
