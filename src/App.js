import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";


function App() {
  return (
    <BrowserRouter>
    <div>
     <Navbar/>
     <Routes>
     <Route index element={<Hero/>} />
     <Route path="/Hero" element={<Hero/>} />
     <Route path="/About" element={<About/>} />
     <Route path="/Contact" element={<Contact/>} />
     <Route path="/Portfolio" element={<Portfolio/>} />
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
