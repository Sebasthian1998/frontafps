import axiosClient from "config/config"

// constantes
const dataInicial = {
    array: []
}

// types
const KIT_LIST_SUCCESS = 'KIT_LIST_SUCCESS'

// reducer
export default function kitReducer(state = dataInicial, action){
    switch(action.type){
        case KIT_LIST_SUCCESS:
            return {...state, array: action.payload}
        default:
            return state
    }
}
// actions
export const KitsAction = () => async (dispatch, getState) => {
    try {
        const data = await axiosClient.get('/kit')
        dispatch({
            type: KIT_LIST_SUCCESS,
            payload: data.data  
        })
    } catch (error) {
        console.log(error)
    }
}