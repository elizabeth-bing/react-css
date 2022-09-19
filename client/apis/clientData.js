import request from 'superagent'

const rootUrl = '/api/v1'

export function getClientData() {
  return request.get(rootUrl + '/clientData').then((res) => {
    //console.log(res.body)
    return res.body
  })
}
