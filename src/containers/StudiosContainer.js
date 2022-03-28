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
  return (
    <div>
      <StudioList studios={studios}/>
    </div>
  )
}

export default StudiosContainer