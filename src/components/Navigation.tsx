import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <div className="navigation">
        <ul>
          <NavLink to="/"  className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
           <li>Startseite</li>
          </NavLink>
            <li 
              className="nav-portfolio"
            >
                Portfolio
                <ul className="nav-projects">
                <NavLink to="/projekt-1"  className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                    <li>Projekt1</li>
                 </NavLink>
                 <NavLink to="/projekt-2"  className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                    <li>Projekt2</li>
                 </NavLink>
                 <NavLink to="/projekt-3"  className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                    <li>Projekt3</li>
                 </NavLink>
                 <NavLink to="/projekt-4"  className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                    <li>Projekt4</li>
                 </NavLink>

                </ul>
            </li>
          <NavLink to="/kontakt"  className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
            <li>kontakt</li>
          </NavLink>
        </ul>
    </div>
  )
}
export default Navigation