import { actionTypes } from "../action/actionMovies";

const initialState = {
    movies: [],
    loading: false,
    error: '',
    favorite: []
}

export const reducerMovies = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case actionTypes.SET_MOVIES:
            return {
                ...state,
                movies: [],
                loading: true,
                error: '',
            }
        case actionTypes.SET_MOVIES_SUCCESS:
            return {
                ...state,
                movies: payload,
                loading: false,
                error: '',
            }
        case actionTypes.SET_MOVIES_ERROR:
            return {
                ...state,
                movies: [],
                loading: false,
                error: payload,
            }

        case actionTypes.ADD_MOVIES:
            const dublicate = state.favorite.some(i => i.id === payload.id)

            if (!dublicate) {
                return {
                    ...state,
                    favorite: [...state.favorite, payload]
                }
            }
        default: return state;
    }
}