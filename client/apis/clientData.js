import request from 'superagent'

const rootUrl = '/api/v1'

export function getClientData() {
  return request.get(rootUrl + '/clientData').then((res) => {
    //console.log(res.body)
    return res.body
  })
}

export function addClientData(formData) {
  return request
    .post(rootUrl + '/clientData/addClientData')
    .send(formData)
    .then((res) => {
      return res.body
    })
    .catch(errorHandler('POST', '/v1/clientData/addClientData'))
}

function errorHandler(method, route) {
  return (err) => {
    if (err.message === 'Not Found') {
      throw Error(
        `Error: You need to implement an API route for ${method} ${route}`
      )
    } else {
      throw Error(`${err.message} on ${method} ${route}`)
    }
  }
}
