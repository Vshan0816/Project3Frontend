import {useState, useEffect} from 'react'

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
    studio_id: ""
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
    studio_id: anime.studio_id
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
  return (
    <div>AnimeForm</div>
  )
}

export default AnimeForm