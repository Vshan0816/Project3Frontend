
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Navbar'
import StudioForm from './StudioForm'
import AnimeForm from './AnimeForm'
import Home from './Home'
import AnimesContainer from '../containers/AnimesContainer'
import StudiosContainer from '../containers/StudiosContainer'
import AnimeCard from './AnimeCard'
import StudioCard from './StudioCard'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>

         

          <Route path ="/animes/new">
            <AnimeForm /> 
          </Route>

          <Route path="/animes/:id">
            <AnimeCard />
          </Route>

          <Route path ="/animes">
            <AnimesContainer /> 
          </Route>

          

          <Route path = "/studios/new">
            <StudioForm />
          </Route>

          <Route path="/studios/:id">
            <StudioCard />
          </Route>

          <Route path ="/studios">
            <StudiosContainer /> 
          </Route>
          
          <Route path ="/">
            <Home /> 
          </Route>
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
