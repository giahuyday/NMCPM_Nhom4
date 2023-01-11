import { FilmAction } from "../contants/film_action_types"

export const setProducts = (products) => {
    return {
        type: FilmAction.SET_PRODUCTS,
        payload: products,
    };
};


export const selectedPrduct = (products) => {
    return {
        type: FilmAction.SELECTED_PRODUCTS,
        payload: products,
    }    
}