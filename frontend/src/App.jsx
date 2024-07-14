import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import About from "./pages/about/About";
import AllBook from "./pages/allBook/AllBook";
import Contact from "./pages/contact/Contact";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Signup from "./components/Signup";
import Cartpage from "./components/Cartpage.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/all-book" element={<AllBook />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/cart" element={<Cartpage />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
