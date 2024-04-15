import React from 'react'
import Track from './Track'
import styles from './Tracklist.module.css'

const Tracklist = ({data, searchValue}) => {
  return (
    <>
    <h3 className={styles.titleResults}>Search results for {searchValue.length>25 ? searchValue.substring(0, 25)+'...' : searchValue}</h3>
    {data.map((song)=> 
        <Track name={song.name.length>20 ? song.name.substring(0, 20)+'...' : song.name} artist={song.artist} album={song.album} key={song.id}/>
   )}

    </>
  )
}

export default Tracklist