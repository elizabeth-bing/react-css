import { getFruits } from '../apis/fruits'
import { addClientData } from '../apis/clientData'

export const SET_FRUITS = 'SET_FRUITS'
export const SET_CLIENTDATA = 'SET_CLIENTDATA'

export function setFruits(fruits) {
  return {
    type: SET_FRUITS,
    payload: fruits,
  }
}

export function fetchFruits() {
  return (dispatch) => {
    return getFruits().then((fruits) => {
      dispatch(setFruits(fruits))
      return null
    })
  }
}
//--------

export function setClientData(clientData) {
  return {
    type: SET_CLIENTDATA,
    payload: clientData,
  }
}

export function sendClientData(formData) {
  return (dispatch) => {
    return addClientData(formData).then((thunkData) => {
      // console.log(para)
      dispatch(addClientData(thunkData))
    })
  }
}
