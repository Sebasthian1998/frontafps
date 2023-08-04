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
export const UsersAction = (dataAxios) => async (dispatch, getState) => {
    try {
        console.log(dataAxios)
        dispatch({
            type: USER_LIST_SUCCESS,
            payload: dataAxios  
        })
    } catch (error) {
        console.log(error)
    }
}