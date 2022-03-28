import React from 'react'
import StudioCard from './StudioCard'

const StudioList = ({studios, handleDeleteStudio }) => {
  const StudiosCard = studios.map(studio => {
    return <StudioCard key={studio.id} studio={studio} handleDeleteStudio = {handleDeleteStudio} />
})
  return (
    <div>
       <h1>Studios</h1>
            <div style ={{display: "flex", flexWrap: "wrap"}}> 
                {StudiosCard}
            </div>
    </div>
  )
}

export default StudioList