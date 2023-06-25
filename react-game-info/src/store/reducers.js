import { actionTypes } from "./actions";


const initialState = {
    count: 0
}

export const reducerCont = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                count: state.count + payload
            };

        case actionTypes.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };

        default: return state
    }
}