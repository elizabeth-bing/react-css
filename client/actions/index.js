import { addClientData } from '../apis/clientData'

export const SET_CLIENTDATA = 'SET_CLIENTDATA'
export const ADD_CLIENTDATA = 'ADD_CLIENTDATA'

//--------

export function setClientData(clientData) {
  console.log('client', clientData)
  return {
    type: SET_CLIENTDATA,
    payload: clientData,
  }
}
export function appendClientData(clientData) {
  return {
    type: ADD_CLIENTDATA,
    payload: clientData,
  }
}

export function sendClientData(formData) {
  return (dispatch) => {
    return addClientData(formData).then((thunkData) => {
      console.log('THUNK', thunkData)
      dispatch(appendClientData(thunkData))
      return null
    })
  }
}
