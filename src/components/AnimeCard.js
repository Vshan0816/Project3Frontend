import {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import {useHistory} from "react-router-dom"


const AnimeCard = ({anime, handleDeleteAnime}) => {
  const history = useHistory()
  const {id} = useParams()
  const [animeObj, setAnimeObj] = useState(null);
    useEffect(() => {   
        if (!anime) {
            fetch(`http://localhost:9393/animes/${id}`)
            .then(resp => resp.json())
            .then(anime => setAnimeObj(anime))
        }
    }, [anime, id]);

    const finalAnime = anime ? anime : animeObj
    if (!finalAnime) return <h1>Loading...</h1>

    const handleDeleteClick = () => {
      fetch(`http://localhost:9393/animes/${anime.id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => history.push("/studios"))
        .then(() => handleDeleteAnime(anime.id))
        
    }
    
  return (
    <div style={{border:"solid", width: "17 %", height:"25%", margin:"auto"}}>
      <h2>Title: <Link to={`/animes/${finalAnime.id}`}>{finalAnime.title}</Link></h2>
      <img src = {finalAnime.image_url} alt={finalAnime.title} />
      <h2>Synopsis</h2>
      <p>{finalAnime.synopsis}</p>
      <h2>Release Year:{finalAnime.release_year}</h2>
      <h2>Total Seasons:{finalAnime.total_seasons}</h2>
      <h2>Studio:{finalAnime.studio.name}</h2>
      <button className="remove" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  )
}

export default AnimeCard