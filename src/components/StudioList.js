import React from 'react'
import StudioCard from './StudioCard'

const StudioList = ({studios}) => {
  const StudiosCard = studios.map(studio => {
    return <StudioCard key={studio.id} studio={studio} />
})
  return (
    <div>
       <h2>Studios</h2>
            <div style ={{display: "flex", flexWrap: "wrap"}}> 
                {StudiosCard}
            </div>
    </div>
  )
}

export default StudioList