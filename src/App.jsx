import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'
import Tracklist from './components/Tracklist'
import Track from './components/Track'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar />
      <SearchResults />
      <Playlist />
      <Tracklist />
      <Track />
    </>
  )
}

export default App
