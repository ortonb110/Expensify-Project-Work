import links from "../Utils/links"
import { NavLink } from "react-router-dom"

const NavLinks = ({toggleSidebar}) => {
  return (
    <div className="nav-links">
        {
            links.map((items, index)=> {
                const {id, text, path, icon} = items;
                return (
                    <NavLink to={path} key={id} onClick={toggleSidebar} className={({isActive}) => isActive? 'nav-link active' : 'nav-link'}>
                        <span className="icon">{icon}</span>
                        {text}
                    </NavLink>
                )
            })
        }
    </div>
  )
}

export default NavLinks