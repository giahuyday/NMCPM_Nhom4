import React from "react";
import './Home.css'

function Home() {
    return (
        <><div className="container">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/source/images/slider1.jpg" className="d-block w-100" alt="...">
                        </img></div>
                    <div className="carousel-item">
                        <img src="./src/images/slider2.jpg" className="d-block w-100" alt="...">
                        </img></div>
                    <div className="carousel-item">
                        <img src="./src/images/slider3.jpg" className="d-block w-100" alt="...">
                        </img></div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div><div className="container">
                <div className="row">
                    <div className="col">Column</div>
                    <div className="col">Column</div>
                    <div className="w-100"></div>
                    <div className="col">Column</div>
                    <div className="col">Column</div>
                </div>
            </div></>
    );
}

export default Home;