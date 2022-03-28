import React from 'react'
import AnimeCard from './AnimeCard'

const AnimeList = ({animes}) => {
  const AnimesCard = animes.map(anime => {
    return <AnimeCard key={anime.id} anime={anime} />
})
  return (
    <div>
      <h1>Animes</h1>
            <div style ={{display: "flex", flexWrap: "wrap"}}> 
                {AnimesCard}
            </div>
    </div>
  )
}

export default AnimeList