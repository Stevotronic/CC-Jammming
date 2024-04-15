import React from 'react'
import styles from './BtnSaveToSpotify.module.css'

const BtnSaveToSpotify = ({listName}) => {
  return (
    <button className={listName ? styles.button : styles.buttonDisabled }>{listName ? `Save to Spotify` : 'Give your list a title to save to Spotify'}</button>
  )
}

export default BtnSaveToSpotify