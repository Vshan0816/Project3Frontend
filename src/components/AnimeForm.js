import {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom"

const AnimeForm = () => {
  const [studios, setStudios] = useState([])
  const fetchData = () => {
      fetch("http://localhost:9393/studios")
      .then(response => response.json())
      .then(data => setStudios(data))
      .catch(error => alert(error))
  }

  useEffect(() => {
      fetchData()
  }, [])

  const [anime, setAnime] = useState({
    title: "",
    synopsis: "",
    release_year: "",
    total_seasons: "",
    image_url: "",
    studio: ""
});
const history = useHistory()

const handleChange = (e) => {
  setAnime({
      ...anime,
      [e.target.name]: e.target.value
  })
}

const handleSubmit = e => {
  e.preventDefault()
  const newAnime = {
    title: anime.title,
    synopsis: anime.synopsis,
    release_year: anime.release_year,
    total_seasons: anime.total_seasons,
    image_url: anime.image_url,
    studio: anime.studio
}

fetch("http://localhost:9393/animes", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newAnime)
})
.then(() => history.push("/animes"))
}

const StudiosMap = studios.map(studio => {
  return <option value={anime.studio} name = "studio">{studio.name}</option>
}) 

  return (
    <>
      <h3>Create a Anime</h3>
      <form onSubmit={handleSubmit}>
         <label htmlFor="title">Title</label>
         <input onChange={handleChange} type="text" name="title" value={anime.title} required/><br />
         <label htmlFor="synopsis">Synopsis</label>
         <input onChange={handleChange} type="text" name="synopsis" value={anime.synopsis}/><br />
         <label htmlFor="release_year">Release Year</label>
         <input onChange={handleChange} type="text" name="release_year" value={anime.year_founded}/><br />
         <label htmlFor="total_seasons">Total Seasons</label>
         <input onChange={handleChange} type="text" name="total_seasons" value={anime.total_seasons}/><br />
         <label htmlFor="image_url">Image Url</label>
         <input onChange={handleChange} type="text" name="image_url" value={anime.image_url}/><br />
         <label htmlFor="studio">Studio </label>
         <select
          // name = "studio_id"
          onChange={handleChange}
          type="text"
          
          
          >
          {StudiosMap}
         </select>
         <input type="submit"  value="Create Anime" />
      </form>

    </>
  )
}

export default AnimeForm