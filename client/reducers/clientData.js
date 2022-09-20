const initialClientState = []

const clientDataReducer = (state = initialClientState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_CLIENTDATA':
      // console.log('Why no adding')
      //thoughts on new twice album gerard
      return [...state, payload]

    case 'GET_ALL_WIDGETS':
      return payload

    default:
      return state
  }
}

export default clientDataReducer
