import React from 'react'
import styles from './Track.module.css'

const Track = ({name, artist, album, id}) => {
  return (
    <div className={styles.card} key={id}>
        <div>
            <h2 className={styles.title}>{name}</h2>
            <h2 className={styles.artist}>{artist}</h2>
            <h2 className={styles.album}>{album}</h2>
        </div>
        <div className={styles.add}>
            Add
        </div>
    </div>
  )
}

export default Track