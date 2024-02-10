import NavBar from "../../components/NavBar/NavBar.tsx";
import logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";

const Header = () => {
  const logoStyle = {
    width: 50,
    height: 50,
    backgroundImage: `url(${logo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: 8,
  };
  return (
    <header>
      <div className={"container bg-white d-flex align-items-center justify-content-between rounded"}>
        <Link to={"/quotes"} style={logoStyle}></Link>
        <NavBar/>
      </div>
    </header>
  );
};

export default Header;