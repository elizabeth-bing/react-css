exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('clientData')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('clientData').insert([
        {
          id: 1,
          name: 'banana',
          email:
            'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2030&q=80',
          areaOfLaw: 'Employment',
          parties: 'FakeLawFirm',
          details: 'unjustified dismissal',
          outcome: 'compensation and a good reference',
          contractQ: 'can they dismiss me under my contract?',
          file: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2030&q=80',
          anythingElse: 'no',
        },
      ])
    })
}
