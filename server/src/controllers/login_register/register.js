const bcrypt = require('bcrypt');
const client = require('../../../databaseConnection');

const register = async (request, response)=>{
    try{
        const { login, password, passwordRep } = request.body;
        console.log(password, passwordRep);
        if(password !== passwordRep){
            response.json({error: true ,msg: 'Repeated password is not the same'})
            throw 'Repeated password is not the same';
        }
        const loginExists = await isLoginExists(login);
        if(!loginExists){
            let hashedPassword = await bcrypt.hash(password,10);
            try{
                const insertQuery = await client.query('Insert Into account(account_id, account_type_id, login, password) Values (default, 0, $1, $2)', [login, hashedPassword] );
            }catch(e){
                response.json({error: true ,msg: 'Internal server error'})
                throw e;
            }
            console.log(`New account registered - ${login}`);
            response.json({error: false ,msg: 'Account created'})
        }else{
            response.json({error: true ,msg: 'User with this login exists'})
            throw 'User with this login already exists';
        }
    }catch (error){
        console.error(error);
    }
  }

const isLoginExists = async (login) =>{
    try{
        const result = await client.query('Select * from account where login=$1', [login]);
        if(result.rowCount == 0 ){
            return false;
        }
        return result.rows[0];
    }catch (error){
        throw error;
    }
}

module.exports = {
    register,
    isLoginExists
}