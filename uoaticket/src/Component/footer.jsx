import React from "react";
import footer from "../Pages/images/footer-bg.jpg"

function Footer() {
    return (
        <footer>
            <div className="card bg-dark text-white">
                <img src={footer} alt="footer" />
            </div>
        </footer>
    );
}

export default Footer