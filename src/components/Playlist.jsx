import React from 'react'
import Track from './Track';
import styles from './Playlist.module.css'

const Playlist = ({onChange, listName, playlist}) => {
  const inputHandler = (event) => {
    const list = event.target.value;
    onChange(list);
  };
  return (<>
  <h3 className={styles.playlistName}>How would you like to call your list?</h3>
  <form>
    <input type='text' value={listName} onChange={inputHandler} />
  </form>
  {playlist.map((song)=> 
        <Track name={song.name.length>20 ? song.name.substring(0, 20)+'...' : song.name} artist={song.artist} album={song.album} key={song.id}/>
   )}
    </>)
}

export default Playlist