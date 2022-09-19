const connection = require('./connection')

function getClientData(db = connection) {
  return db('clientData').select()
}

function addClientData(clientData, db = connection) {
  return db('clientData').insert([
    {
      name: clientData.name,
      email: clientData.email,
      areaOfLaw: clientData.areaOfLaw,
      parties: clientData.parties,
      details: clientData.details,
      outcome: clientData.outcome,
      contractQ: clientData.contractQ,
      file: clientData.file,
      anythingElse: clientData.anythingElse,
    },
  ])
}

module.exports = {
  addClientData,
  getClientData,
}
