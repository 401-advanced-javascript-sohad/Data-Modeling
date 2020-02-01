'use strict';

const uuid = require('uuid/v4');
const fs = require('fs');

class Model {

  constructor() {

  }

  // get(fileName) {
  // }

  // get(id) {
 
  // }

  create(entry) {
    entry.id = uuid();
    let record = this.sanitize(entry);
    return fs.writeFile(record);
  }

  // create(entry) {

  // }

  // update(id, entry) {
  // }
  //
  // delete(id) {
  // }

  sanitize(entry) {

    let valid = true;
    let record = {};

    Object.keys(this.schema).forEach(field => {
      if (this.schema[field].required) {
        if (entry[field]) {
          record[field] = entry[field];
        } else {
          valid = false;
        }
      } else {
        record[field] = entry[field];
      }

      if(typeof entry[field] !== this.schema[field].type){
        valid = false;
      }
    });

    return valid ? record : undefined;
  }

  // readFile(fileName, callback){
  //   fs.readFile(fileName, (error, fileContents) => {
  //     if (error){
  //       callback(error);
  //     } else {
  //       callback(undefined, JSON.parse(fileContents.toString()));
  //     }
  //   })
  // }

  // writeFile(fileName, data, callback){
  //     }
  //   })

}

module.exports = Model;