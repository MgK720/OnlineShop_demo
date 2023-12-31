const client = require('../../../databaseConnection');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;

const { jwtOptions } = require('../../config/jwtOptions')

const jwtStrategy = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const result = await client.query('SELECT account_id, account_type_id, login FROM account WHERE account_id=$1', [payload.id]);
    //const user = result.rows[0];
    const user = {
      account_id: result.rows[0].account_id,
      isOwner: result.rows[0].account_type_id === 1 ? true : false,
      login: result.rows[0].login 
    } 

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  } catch (err) {
    return done(err, false);
  }
});

jwtStrategy.cleanup = async () => {
  await client.release();
};

passport.use(jwtStrategy);

module.exports = passport;
