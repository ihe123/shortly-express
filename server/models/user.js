const crypto = require('crypto');
const utils = require('../lib/hashUtils');
const Model = require('./model');

// Write you user database model methods here
class Users extends Model {

  constructor() {
    super('users');
  }
    
  create(user) {
    let shasum = crypto.createHash('sha1');
    shasum.update(user.password);
    user.password = shasum.digest('hex');

    return super.create.call(this, user);
  }

  login(user) {
    let shasum = crypto.createHash('sha1');
    shasum.update(user.password);
    user.password = shasum.digest('hex');

    return super.get.call(this, user);
  }

}

module.exports = new Users();

// class Users extends Model {
//   constructor() {
//     super('users');
//   }

//   compare(attempted, password, salt) {
//     return utils.compareHash(attempted, password, salt);
//   }

//   create({ username, password }) {
//     let timestamp = Date.now();
//     let salt = utils.createSalt(timestamp);

//     let newUser = {
//       username,
//       salt,
//       password: utils.createHash(password, salt)
//     };

//     return super.create.call(this, newUser);
//   }
// }

// module.exports = new Users();