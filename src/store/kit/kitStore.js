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
export const KitsAction = (dataAxios) => async (dispatch, getState) => {
    try {
        console.log(dataAxios)
        dispatch({
            type: KIT_LIST_SUCCESS,
            payload: dataAxios  
        })
    } catch (error) {
        console.log(error)
    }
}