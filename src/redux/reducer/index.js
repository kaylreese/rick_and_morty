import {
    CREATE_FAVORITES,
    DELETE_FAVORITES
} from "../actions/";

const initialState = {
    myFavorites:[],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_FAVORITES:
            return {
                ...state, 
                myFavorites: action.payload
            };

        case DELETE_FAVORITES:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((e) => e.id !== action.payload)
            };
        
        default:
            return state;
    }
}

export default rootReducer;