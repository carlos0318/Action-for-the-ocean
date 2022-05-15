import { GET_USER, LOGOUT } from './../types';

export default (state, action) => {
    switch (action.type) {
        case GET_USER:
        return {
            ...state,
            user: action.payload
        };
        case LOGOUT:
        return {
            ...state,
            user: null
        };
        default:
        return state;
    }
}