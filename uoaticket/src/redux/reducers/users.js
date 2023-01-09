import {INIT_STATE} from "../../constant"
import { getUser, getType } from "../actions";

export default function userReducer(state = INIT_STATE.users, action){
    switch(action.type){
        case getType(getUser.getUserRequest()): //getUserRequest
            return {
                ...state,
                isLoading: true,
            };
        case getType(getUser.getUserSuccess({})): //getUserSuccess
            return{
                ...state,
                isLoading: false,
                // data: action.payload
                data: state.data.map(user => user._username === action.payload._id ? action.payload : user)
            };
        case getType(getUser.getUserFailure()): //getUserFailure
            return{
                ...state,
                isLoading: false
            };
        default:
            return state
    }
}