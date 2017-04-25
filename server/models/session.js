const utils = require('../lib/hashUtils');
const Model = require('./model');

class Sessions extends Model {
  constructor() {
    super('sessions');
  }
}

// Write you session database model methods here
module.exports = new Sessions();
