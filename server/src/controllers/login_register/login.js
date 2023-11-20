const bcrypt = require('bcrypt');
const { jwtOptions } = require('../../config/jwtOptions')
const jwt = require('jsonwebtoken');
const client = require('../../../databaseConnection');

const login = async (req, res) => {
    try {
        const { login, password } = req.body;
    
        const result = await client.query('SELECT * FROM account WHERE login=$1', [login]);
        const user = result.rows[0];
    
        if (!user) {
          return res.json({error: true, msg: "User not found"});
        }
    
        const isPasswordValid = await bcrypt.compare(password, user.password);
    
        if (isPasswordValid) {
          const token = jwt.sign({ id: user.account_id, account_type_id: user.account_type_id, login: user.login }, jwtOptions.secretOrKey, { expiresIn: '30s' });
          req.isAuth = true;
          res.json({ 
            token: token, 
            error: false,
            msg: "Signed in", 
            user: { 
                account_id: user.account_id, 
                isOwner: user.account_type_id === 1 ? true : false,
                login: user.login } 
            });
        } else {
          res.json({error: true, msg: "Incorrect password"});
        }
    }catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal server error' });
    }

}

module.exports = {
    login
}