import React from 'react'

const StudioCard = ({studio}) => {
  return (
    <div style={{border:"solid", width: "17%", height:"25%", margin:"auto"}}>
      <h2>Name: {studio.name} </h2>
      <h2>Year founded: {studio.year_founded}</h2>
      <p>Animes: {studio.animes.map(anime => {return `${anime.title}. `})} </p>
      
    </div>
  )
}

export default StudioCard