import React from 'react'
import AnimeCard from './AnimeCard'

const AnimeList = ({animes}) => {
  const AnimesCard = animes.map(anime => {
    return <AnimeCard key={anime.id} anime={anime} />
})
  return (
    <div>
      <h2>Animes</h2>
            <div style ={{display: "flex", flexWrap: "wrap"}}> 
                {AnimesCard}
            </div>
    </div>
  )
}

export default AnimeList