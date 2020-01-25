'use strict';

jest.mock('fs');

const Persons = require('../categories/person.js');

describe('Person model', () => {
  let persons;

  beforeEach( () => {
    persons = new Persons();
  })

  it(' undefined  missing requirements', () => {
    const schema = persons.schema;
    const testRecord = {};
    for (let field in schema) {
      if (schema[field].required) {
        testRecord[field] = null;
      }
    }
    expect(persons.sanitize(testRecord)).toBeUndefined();
  });

//   it('can create() a new person', () => {
//     let obj = { name: 'sohad' };

//     return persons.create(obj)
//       .then(record => {
//         Object.keys(obj).forEach(key => {
//           expect(record[key]).toEqual(obj[key]);
//         });
//       })
//       .catch(error => console.error('CREATE ERROR', error));
//   });

  // it('can get() a person', () => {
  //
  // });

});