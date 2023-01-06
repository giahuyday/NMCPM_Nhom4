import React from "react";


function Card({item}){
    return(
        <div className="Card">
            <div className="image">
                <img src={item.img} alt="mainImg" className="mainImg"/>
                {/* <img src={item.img2} alt="secImg" className="secImg" /> */}
            </div>
            <h2>{item.title}</h2>
            <div className="prices">
                <h3>${item.Price}</h3>
            </div>
        </div>
    )
}

export default Card