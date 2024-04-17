import React from 'react'
import styles from './TrackPlaylist.module.css'

const TrackPlaylist = ({name, artist, album, id, playListRemoveHandler}) => {
  let song = {
    "name": name,
    "artist": artist,
    "album": album,
    "id": id
 };
  return (
    <div className={styles.card} key={id}>
        <div>
            <h2 className={styles.title}>{name}</h2>
            <h2 className={styles.artist}>{artist}</h2>
            <h2 className={styles.album}>{album}</h2>
        </div>
        <div className={styles.add} onClick={(e)=>playListRemoveHandler()}>
            -
        </div>
    </div>
  )
}

export default TrackPlaylist