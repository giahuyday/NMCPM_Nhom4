import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './nav-bar.css'
import {BrowserRouter, Link, Outlet } from "react-router-dom";

function Navbar() {
    return (
        <nav class="navbar navbar-custom navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../images/uoalogo.jpg" alt="Logo"/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    {/* <a class="nav-link " aria-current="page" href="#">Trang chủ</a>
                    <a class="nav-link" href="#">Rạp</a>
                    <a class="nav-link" href="#">Tin tức</a>
                    <a class="nav-link" href="#">Ưu đãi</a>
                    <a class="nav-link" href="#">Tuyển dụng</a> */}
                    <Link className="nav-link" path="/">Trang chủ</Link>
                    <Link className="nav-link" path="/">Rạp</Link>
                    <Link className="nav-link" path="/">Tin tức</Link>
                    <Link className="nav-link" path="/">Ưu đãi</Link>
                    <Link className="nav-link" path="/">Tuyển dụng</Link>
                </div>
            </div>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Tìm kiếm" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">
                    {/* <i class="fa-solid fa-magnifying-glass"></i> */}
                    <SearchIcon/>
                </button>
                
                <div className="login"><a>Đăng nhập/Đăng kí</a></div>
            </form>
        </div>
    </nav>
    )
}

export default Navbar