
import axiosClient from 'config/config'

// constantes
const dataInicial = {
    array: []
}

// types
const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS'

// reducer
export default function userReducer(state = dataInicial, action){
    switch(action.type){
        case USER_LIST_SUCCESS:
            return {...state, array: action.payload}
        default:
            return state
    }
}
// actions
export const UsersAction = () => async (dispatch, getState) => {
    try {
        const data = await axiosClient.get('/user')
        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data.data 
        })
    } catch (error) {
        console.log(error)
    }
}