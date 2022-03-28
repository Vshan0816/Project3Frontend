import React from 'react'

const AnimeCard = ({anime}) => {
  return (
    <div style={{border:"solid", width: "17 %", height:"25%", margin:"auto"}}>
      <h3>{anime.title}</h3>
      <img src = {anime.image_url} alt={anime.title} />
      <h2>Synopsis</h2>
      <p>{anime.synopsis}</p>
      <h2>Release Year:{anime.release_year}</h2>
      <h2>Total Seasons:{anime.total_seasons}</h2>
      <h2>Studio:{anime.studio.name}</h2>
    </div>
  )
}

export default AnimeCard