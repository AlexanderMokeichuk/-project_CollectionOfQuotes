import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="collapse navbar-collapse" >
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to={"/quotes"}>Quotes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/new-quotes"}>New quote</NavLink>
        </li>
      </ul>
    </div>
</nav>
)
  ;
};

export default NavBar;