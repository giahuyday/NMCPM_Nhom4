import React from "react";
import './Home.css'
import Navbar from "../Component/nav-bar";
import slider1 from "./images/slider1.jpg"
import slider2 from "./images/slider2.jpg"
import slider3 from "./images/slider3.jpg"
import FeatureProduct from "../Component/product/featureProduct";
function Home() {
    return (
        <>
            <Navbar />
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slider1} className="d-block w-100" alt="slider"/>
                    </div>
                    <div className="carousel-item">
                        <img src={slider2} className="d-block w-100" alt="slider"/>
                    </div>
                    <div className="carousel-item">
                        <img src={slider3} className="d-block w-100" alt="slider"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <FeatureProduct/>
        </>
    );
}

export default Home;