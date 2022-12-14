import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './nav-bar.css'
import logo from "../Pages/images/uoalogo.png"
import { BrowserRouter, Link, Outlet } from "react-router-dom";
import {userState} from 'react'
function Navbar() {
    function handleSubmit(e) {
        e.preventDefault();
        const [filmName, setFilmName] = userState("")
    }
    return (
        <nav className="navbar navbar-custom navbar-expand-lg bg-body-#30105E">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/home" className="nav-link" path="/">Trang chủ</Link>
                        <Link to="/theatre" className="nav-link" path="/theatre">Rạp</Link>
                        <Link to="/allfilm" className="nav-link" path="/allfilm">Phim</Link>
                        <Link to="/addfilm" className="nav-link" path="/">Thêm phim</Link>
                        <Link to="/news_ver2" className="nav-link" path="/news_ver2">Tin tức</Link>
                        <Link to="/career_ver2" className="nav-link" path="/career_ver2">Tuyển dụng</Link>
                    </div>
                </div>
                <form className="d-flex">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                        <SearchIcon />
                    </button>
                </form>

                <div className="login"><Link to="/login" className="nav-link">Đăng nhập</Link></div>
            </div>
        </nav >
    )
}

export default Navbar