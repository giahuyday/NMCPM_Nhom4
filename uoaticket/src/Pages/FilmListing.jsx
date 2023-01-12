import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from "../redux/actions/filmActions";
import FilmComponent from "./FilmComponent";
import Navbar from "../Component/nav-bar";

const FilmListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();


    const fetchFilm = async () => {
        const response = await axios
            .get("http://localhost:5000/getfilm") //  https://fakestoreapi.com/products
            .catch((err) => {
                console.log("Error", err);
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchFilm();
    }, []);
    console.log("Products: ", products)

    return (
        <>
        <Navbar/>
        <div className="list">
            <FilmComponent />
        </div>
        </>
    )
}

export default FilmListing