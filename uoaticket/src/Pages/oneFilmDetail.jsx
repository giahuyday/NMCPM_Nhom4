import React, { useEffect } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedPrduct } from "../redux/actions/filmActions";

const FilmDetail = () => {
    const film = useSelector((state) => state.film)
    const { filmID } = useParams();
    const dispatch = useDispatch();
    console.log(film);

    const fetchFilmDetail = async () => {
        const response = await axios.get(`http://localhost:5000/getfilm/${filmID}`)
            .catch((err) => {
                console.log("Err", err)
            });
        dispatch(selectedPrduct(response.data))
    }
    useEffect(() => {
        if(filmID && filmID !== "") fetchFilmDetail()
    }, [filmID])
    return (
        <>Hello</>
    )
}

export default FilmDetail