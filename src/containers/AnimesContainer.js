import {useState, useEffect} from 'react'
import AnimeList from '../components/AnimeList'

const AnimesContainer = () => {
  const [animes, setAnimes] = useState([])
  const fetchData = () => {
      fetch("http://localhost:9393/animes")
      .then(response => response.json())
      .then(data => setAnimes(data))
      .catch(error => alert(error))
  }

  useEffect(() => {
      fetchData()
  }, [])
  return (
    <div>
      <AnimeList animes={animes}/>
    </div>
  )
}

export default AnimesContainer