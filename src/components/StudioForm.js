import {useState} from "react"
import {useHistory} from "react-router-dom"

const StudioForm = () => {

  const [studio, setStudio] = useState({
    name: "",
    year_founded: ""
});
const history = useHistory()

const handleChange = (e) => {
  setStudio({
      ...studio,
      [e.target.name]: e.target.value
  })
}

const handleSubmit = e => {
  e.preventDefault()
  const newStudio = {
    name: studio.name,
    year_founded: studio.year_founded
    
}

fetch("http://localhost:9393/studios", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newStudio)
})
.then(() => history.push("/studios"))
}

  return (
    <>
      <h3>Create a New Studio</h3>
      <form onSubmit={handleSubmit}>
         <label htmlFor="name">Name</label>
         <input onChange={handleChange} type="text" name="name" value={studio.name} required/><br />
         <label htmlFor="year_founded">Year Founded</label>
         <input onChange={handleChange} type="text" name="year_founded" value={studio.year_founded}/><br />
         <input type="submit" value="Create Studio" />
      </form>

    </>
  )
}

export default StudioForm