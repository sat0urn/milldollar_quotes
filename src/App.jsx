import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {

  return (
    <BrowserRouter basename={'/milldollar_quotes'}>
      <div className={"bg-dark-subtle"}>
        <Header/>
        <AppRouter/>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
