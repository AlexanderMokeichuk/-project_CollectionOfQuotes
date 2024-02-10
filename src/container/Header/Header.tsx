import NavBar from "../../components/NavBar/NavBar.tsx";

const Header = () => {
  return (
    <header>
      <div className={"container bg-white d-flex justify-content-between rounded"}>
        <div><h1>Home</h1></div>
        <NavBar/>
      </div>
    </header>
  );
};

export default Header;