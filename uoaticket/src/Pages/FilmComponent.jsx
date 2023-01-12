import React from "react";
import { useSelector } from "react-redux";
import './FilmComponent.css'
import {Link} from 'react-router-dom'

const FilmComponent = () => {
    const products = useSelector((state) => state.allFilms.products);
    const renderList = products.map((product) => {
        const { _id, filmname, images/*id, title, image, price, category*/ } =  product;
        return (
            <div className="card" key={_id}>
                <Link to={`/allfilm/${_id}`}>
                <div className="image"><img src={images} alt='' /></div>
                <div className="content">
                    <div className="header">{filmname}</div>
                    {/* <div className="meta price">${price}</
                     */}
                </div>
                </Link>
            </div>
        )
    })
    return <>{renderList}</>
};

export default FilmComponent