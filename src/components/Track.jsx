import React from 'react'
import styles from './Track.module.css'

const Track = ({name, artist, album, id, playListHandler}) => {
  let song = {
    "name": name,
    "artist": artist,
    "album": album,
    "id": id
 };
  return (
    <div className={styles.card}>
        <div>
            <h2 className={styles.title}>{name}</h2>
            <h2 className={styles.artist}>{artist}</h2>
            <h2 className={styles.album}>{album}</h2>
        </div>
        <div className={styles.add} onClick={(e)=>playListHandler(song)}>
            +
        </div>
    </div>
  )
}

export default Track