import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/shaered/navbar/Navbar";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Blogs from "./components/blogs/Blogs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/blogs" element={<Blogs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
