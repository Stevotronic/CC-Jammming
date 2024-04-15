import React from 'react'
import styles from './Playlist.module.css'

const Playlist = ({onChange, listName}) => {
  const inputHandler = (event) => {
    const list = event.target.value;
    onChange(list);
  };
  return (<>
  <h3 className={styles.playlistName}>How would you like to call your list?</h3>
  <form>
    <input type='text' value={listName} onChange={inputHandler} />
  </form>
    </>)
}

export default Playlist