import NavBar from "../../components/NavBar/NavBar.tsx";
import {Link} from "react-router-dom";

const Header = () => {

  return (
    <header>
      <div className={"container bg-white d-flex align-items-center justify-content-between rounded"}>
        <Link
          to={"/quotes"}
          className={"text-secondary"}
          style={{fontWeight: 700, fontSize: 40, textDecoration: "none"}}
        >
          Quotes
        </Link>
        <NavBar/>
      </div>
    </header>
  );
};

export default Header;