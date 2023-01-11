import React from "react";
import { useSelector } from "react-redux";
import './FilmComponent.scss'
const FilmComponent = () => {
    const products = useSelector((state) => state.allFilms.products);
    const renderList = products.map((product) => {
        const {id, title, image, price, category} = product
        return (
                    <div className="card" key={id}>
                        <div className="image"><img src={image} alt={title} /></div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">$ {price}</div>
                            <div className="meta">{category}</div>
                        </div>
    
                    </div>
        )
    })
    return <>{renderList}</>
};

export default FilmComponent