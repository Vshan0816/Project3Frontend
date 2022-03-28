import {useState, useEffect} from 'react'
import StudioList from '../components/StudioList'

const StudiosContainer = () => {
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

  const handleDeleteStudio = (id) => {
    const updatedStudios = studios.filter((studio) => studio.id !== id);
    setStudios(updatedStudios);
  }
  return (
    <div>
      <StudioList studios={studios} handleDeleteStudio={handleDeleteStudio}/>
    </div>
  )
}

export default StudiosContainer