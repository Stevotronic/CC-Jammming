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

  // useState
  const [searchValue, setSearchValue] = useState('');
  const [listName, setListName] = useState('');
  const [playList, setPlayList] = useState([{
    "name":"Go With The Flow",
    "artist":"Queens Of The Stone Age",
    "album":"Songs For The Deaf",
    "id":2
 },{
  "name":"I Wanna Be Your Dog",
  "artist":"The Stooges",
  "album":"The Stooges",
  "id":5
},{
  "name":"Everything In It's Right Place",
  "artist":"Radiohead",
  "album":"Kid A",
  "id":6
}]);

  // Handlers
  const changeHandler = (newSong)=> {
    setSearchValue(newSong);
  };
  const listNameHandler = (input) => {
    setListName(input);
  };
  const addPlayList = (newObject) => {
    setPlayList([...playList, newObject])
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
          <Playlist onChange={listNameHandler} listName={listName} playlist={playList} />
          <BtnSaveToSpotify listName={listName} />
        </div>
      </div>
      
    </>
  )
}

export default App
