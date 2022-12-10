// import axios from "axios";
// import fetch from "node-fetch";

export const CREATE_FAVORITES = "CREATE_FAVORITES";
export const DELETE_FAVORITES = "DELETE_FAVORITES";

export const addFavorites = (payload) => {
    return {
      type: CREATE_FAVORITES,
      payload: payload
    };
};

export const deleteFavorites = (id) => {
    return {
        type: DELETE_FAVORITES,
        payload: id,
    }
}