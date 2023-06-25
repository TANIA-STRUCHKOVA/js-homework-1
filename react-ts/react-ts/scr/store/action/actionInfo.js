import axios from "axios"

export const actionTypes ={
    SET_INFO: 'SST_INFO',
    SET_INFO_SUCCESS: 'SET_INFO_SUCCESS',
    SET_INFO_ERROR: 'SET_INFO_ERROR',

}

export const actionInfo = {
    getInfo: (id) => (dispatch) => {
        dispatch({ type: actionTypes.SET_INFO })
        axios.get(`http://api.themoviedb.org/3/movie/${id}?api_key=5bdf9073f509e9546d7b437827fc2685&append_to_response=videos`)
            .then(res => {
                dispatch({
                    type: actionTypes.SET_INFO_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({ type: actionTypes.SET_INFO_ERROR, payload: err })
            })
    }
}