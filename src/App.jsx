import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Rent from "./pages/Rent";
import Home from "./pages/Home";
import Sell from "./pages/Sell";
import Buy from "./pages/Buy";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/rent' element={<Rent/>}></Route>
    <Route path='/sell' element={<Sell/>}></Route>
    <Route path='/buy' element={<Buy/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/sign-up' element={<SignUp/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>

  </Routes>
  <Footer/>
  </>
;
}

export default App;
