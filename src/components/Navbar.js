import {NavLink} from 'react-router-dom'

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "black",
    fontweight: "bold",
    verticalAlign: "center"
}

const Navbar = () => {
  return (
    <div>
        <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact style = {style}
                to ="/">
                Home
            </NavLink>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact style = {style}
                to ="/animes">
                Animes
            </NavLink>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact style = {style}
                to ="/animes/new">
                New Anime
            </NavLink>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact style = {style}
                to ="/studios">
                Animation Studios
            </NavLink>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact style = {style}
                to ="/studios/new">
                New Studio
            </NavLink>
    </div>
  )
}

export default Navbar