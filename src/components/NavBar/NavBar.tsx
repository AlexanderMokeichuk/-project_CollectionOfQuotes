import {NavLink} from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link navBarLink" to={"/"}>Quotes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link navBarLink" to={"/new-quotes"}>New quote</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
    ;
};

export default NavBar;