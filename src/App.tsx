import Header from "./container/Header/Header.tsx";
import {Route, Routes} from "react-router-dom";
import Footer from "./container/Footer/Footer.tsx";
import Quotes from "./container/Quotes/Quotes.tsx";
import NewQuote from "./container/NewQuote/NewQuote.tsx";

function App() {

  return (
    <div className={"min-vh-100 d-flex flex-column bg-black"}>
      <Header/>
      <main className={"container mt-5 text-white"}>
        <Routes>
          <Route path={"/"} element={(<Quotes/>)}/>
          <Route path={"/quotes/:id"} element={(<Quotes/>)}/>
          <Route path={"/new-quotes"} element={(<NewQuote/>)}/>
          <Route path={"/new-quotes/:id/edit"} element={(<NewQuote/>)}/>
          <Route path={"/delete"} element={""}/>
          <Route path={"*"} element={(<h1>NOT FOUND!!</h1>)}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
