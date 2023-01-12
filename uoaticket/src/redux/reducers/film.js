import { FilmAction } from "../contants/film_action_types"

const initialState = {
    products: []
}


export const filmReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FilmAction.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
}

export const selectedProductReducer = (state={}, {type, payload}) =>  {
    switch (type) {
        case FilmAction.SELECTED_PRODUCTS:
            return { ...state, ...payload };
        default:
            return state;
    }
}