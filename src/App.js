// import HeaderComponent from "./Components/HeaderComponent";
//import MainComponent from "./Components/Main";
import Homepage from "./Components/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      {/* <HeaderComponent /> */}
      {/* <MainComponent /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
