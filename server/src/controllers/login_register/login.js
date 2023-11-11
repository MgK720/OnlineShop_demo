const bcrypt = require('bcrypt');
const { isLoginExists } = require('./register.js')
const LocalStrategy = require("passport-local");
const client = require('../../../databaseConnection');


const matchPassword = async(password, hashedPassword) =>{
    const result = await bcrypt.compare(password, hashedPassword);
    return result;
}

module.exports = (passport) => {
    passport.use(
      "local-login",
      new LocalStrategy(
        {
          usernameField: "login",
          passwordField: "password",
        },
        async (login, password, done) => {
          try {
            const user = await isLoginExists(login);
            if (!user) return done(null, false);
            const isMatch = await matchPassword(password, user.password);
            if (!isMatch) return done(null, false);
            return done(null, {account_id: user.account_id, login: user.login});
          } catch (error) {
            return done(error, false);
          }
        }
      )
    );
  };