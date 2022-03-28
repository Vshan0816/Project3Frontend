import React from 'react'

const StudioCard = ({studio, handleDeleteStudio}) => {
  const handleDeleteClick = () => {
    fetch(`http://localhost:9393/studios/${studio.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDeleteStudio(studio.id));
  }
  return (
    <div style={{border:"solid", width: "17%", height:"25%", margin:"auto"}}>
      <h2>Name: {studio.name} </h2>
      <h2>Year founded: {studio.year_founded}</h2>
      <p>Animes: {studio.animes.map(anime => {return `${anime.title}. `})} </p>
      <button className="remove" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  )
}

export default StudioCard