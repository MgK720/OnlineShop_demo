const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;
require('dotenv').config({ debug: process.env.DEBUG });

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  };

module.exports = {
    jwtOptions
}