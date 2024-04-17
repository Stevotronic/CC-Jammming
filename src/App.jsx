import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Playlist from "./components/Playlist";
import Tracklist from "./components/Tracklist";
import BtnSaveToSpotify from "./components/buttons/BtnSaveToSpotify";
import BtnSearch from "./components/buttons/BtnSearch";
import data from "./dataSpotify.json";

function App() {
  // useState
  const [searchValue, setSearchValue] = useState("");
  const [listName, setListName] = useState("");
  const [playList, setPlayList] = useState([]);

  // Handlers
  const changeHandler = (newSong) => {
    setSearchValue(newSong);
  };
  const listNameHandler = (input) => {
    setListName(input);
  };
  const addPlayList = (newObject) => {
    const isPresent = playList.find((song) => song.id === newObject.id);
    if (isPresent) {
      console.log("Song is already in the playlist");
    } else {
      setPlayList([...playList, newObject]);
    }
    ;
  };

  const removePlayList = (id) => {
    setPlayList(oldValues => {
      return oldValues.filter(song => song.id !== id)
    });
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Jammming</h1>
        <SearchBar onChange={changeHandler} searchValue={searchValue} />
        <BtnSearch />
      </div>
      <div className="search-results">
        <div className="left-side">
          <Tracklist
            data={data}
            searchValue={searchValue}
            playListHandler={addPlayList}
          />
        </div>
        <div className="right-side">
          <Playlist
            onChange={listNameHandler}
            listName={listName}
            playlist={playList}
            playListRemoveHandler={removePlayList}
          />
          <BtnSaveToSpotify listName={listName} />
        </div>
      </div>
    </>
  );
}

export default App;
