const crypto = require('crypto');
const models = require('../models');
const Promise = require('bluebird');


module.exports.createSession = (req, res, next) => {
  console.log (req.cookies);
  if (JSON.stringify(req.cookies) === '{}') {
    //initialize a new session
    req.session = {};

    let shasum = crypto.createHash('sha1');
    shasum.update((new Date()).toString());
    req.session.hash = shasum.digest('hex');

    //set cookie
    res.cookies = {shortlyid: {value: 'myvalue'}}; // we need to set the value the right way
  }
  next();
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

