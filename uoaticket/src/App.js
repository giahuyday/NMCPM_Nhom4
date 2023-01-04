import logo from './logo.svg';
import './App.css';
import Login from './Pages/login'
import Signup from './Pages/signup'
import Navbar from './Component/nav-bar';
import { BrowserRouter as Router, Route, Routes} 
from "react-router-dom";
import Home from './Pages/home';
import Footer from './Component/footer';
function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<Navbar/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        {/* <Route path="*" element={<NoPage/>}/> */}
        <Route exact path="/footer" element={<Footer/>}/>
      </Routes> 
    </Router>
  );
}

export default App;
