import logo from './logo.svg';
import './App.css';
import Login from './Pages/login'
import Signup from './Pages/signup'
import Navbar from './Component/nav-bar';
import { BrowserRouter as Router, Route, Routes} 
from "react-router-dom";
import Home from './Pages/home';
import Products from './Component/product/products';
import News from "./Pages/news_ver2"
import Career from "./Pages/career_ver2"
// import FilmListing from "./Pages/film_listing"
// import Theatre from './Pages/theatre';
import FilmComponent from './Pages/FilmComponent';
function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/*" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/product" element={<Products/>}/>
        <Route exact path="/career" element={<Career/>}/>
        <Route exact path="/discount" element={<FilmComponent/>}/>
        <Route exact path="/news_ver2" element={<News/>}/>
        <Route exact path="/career_ver2" element={<Career/>}/>
      </Routes> 
    </Router>
  );
}

export default App;
