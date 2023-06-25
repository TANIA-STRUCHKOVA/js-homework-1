import { actionTypes } from "../action/actionInfo";

const initialState = {
    infos: {},
    trailer: {},
    loading: false,
    error: '',
}

export const reducerInfo = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.SET_INFO:
            return {
                ...state,
                infos: {},
                trailer: {},
                loading: true,
                error: '',
            }
        case actionTypes.SET_INFO_SUCCESS:
            return {
                ...state,
                infos: payload,
                trailer: payload.videos.results[0],
                loading: false,
                error: '',
            }
        case actionTypes.SET_INFO_ERROR:
            return {
                ...state,
                trailer: {},
                loading: false,
                error: payload,
            }
        default: return state;
    }
}