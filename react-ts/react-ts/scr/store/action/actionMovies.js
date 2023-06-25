import axios from "axios"
import { genres } from "../../constants/genres"

export const actionTypes = {
    SET_MOVIES: 'SET_MOVIES',
    SET_MOVIES_SUCCESS: 'SET_MOVIES_SUCCESS',
    SET_MOVIES_ERROR: 'SET_MOVIES_ERROR',

    ADD_MOVIES: 'ADD_MOVIES'
}

export const actionMovies = {
    getMovies: (genre, page) => (dispatch) => {
        dispatch({ type: actionTypes.SET_MOVIES })
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=5bdf9073f509e9546d7b437827fc2685&with_genres=${genre}&page=${page}`)
            .then(res => {
                dispatch({
                    type: actionTypes.SET_MOVIES_SUCCESS,
                    payload: res.data.results
                })
            })
            .catch(err => {
                dispatch({ type: actionTypes.SET_MOVIES_ERROR, payload: err })
            })
    },

    addMovies: (payLoad) => ({type: actionTypes.ADD_MOVIES ,payload})
}