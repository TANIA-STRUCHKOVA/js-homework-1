export const actionTypes = {
INCREMENT: 'INCREMENT',
DECREMENT: 'DECREMENT'
}

export const increment = (payload) => ({type: actionTypes.INCREMENT, payload})

export const decrement = (payload) => ({type: actionTypes.DECREMENT, payload})