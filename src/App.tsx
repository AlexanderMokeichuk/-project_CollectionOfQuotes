import Header from "./container/Header/Header.tsx";
import {Route, Routes} from "react-router-dom";
import Footer from "./container/Footer/Footer.tsx";
import Quotes from "./container/Quotes/Quotes.tsx";
import NewQuote from "./container/NewQuote/NewQuote.tsx";

function App() {

  return (
    <div className={"d-flex flex-column bg-black vh-100"}>
      <Header/>
      <main className={"container mt-5 text-white"}>
        <Routes>
          <Route path={"/quotes"} element={(<Quotes/>)}/>
          <Route path={"/new-quotes"} element={(<NewQuote/>)}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App;
