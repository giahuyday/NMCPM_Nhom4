import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './nav-bar.css'
import logo from "../Pages/images/uoalogo.png"
import {BrowserRouter, Link, Outlet } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-custom navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="Logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {/* <a className="nav-link " aria-current="page" href="#">Trang chủ</a>
                    <a className="nav-link" href="#">Rạp</a>
                    <a className="nav-link" href="#">Tin tức</a>
                    <a className="nav-link" href="#">Ưu đãi</a>
                    <a className="nav-link" href="#">Tuyển dụng</a> */}
                    <Link to="/home" className="nav-link" path="/">Trang chủ</Link>
                    <Link to="/theatre" className="nav-link" path="/theatre">Rạp</Link>
                    <Link to="/news" className="nav-link" path="/news">Tin tức</Link>
                    <Link to="/discount" className="nav-link" path="/discount">Ưu đãi</Link>
                    <Link to="/creruit" className="nav-link" path="/">Tuyển dụng</Link>
                </div>
            </div>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Tìm kiếm" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">
                    {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                    <SearchIcon/>
                </button>
                
                <div className="login"><Link to="/login" className="nav-link">Đăng nhập</Link></div>
            </form>
        </div>
    </nav>
    )
}

export default Navbar