import logo from './logo.svg';
import './App.css';
import Login from './Pages/login'
import Signup from './Pages/signup'
import Navbar from './Component/nav-bar';
import { BrowserRouter as Router, Route, Routes} 
from "react-router-dom";
import Home from './Pages/home';
import Footer from './Component/footer';
import FeatureProduct from './Component/product/featureProduct';
import Products from './Component/product/products';
import Career from './Pages/career';
import News from "./Pages/news"
function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/*" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/product" element={<Products/>}/>
        <Route exact path="/news" element={<News/>}/>
        <Route exact path="/career" element={<Career/>}/>
      </Routes> 
    </Router>
  );
}

export default App;
