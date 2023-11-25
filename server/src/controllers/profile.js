const client = require('../../databaseConnection');

//validate input !!! account_id czy jest i data czy jest zgodna z paternem
const getProfile = async (req, res) => {
    try{
        let account_id = null;
        if(req.user){
            account_id = req.user.account_id;
        }else{
            res.status(401).json({status: false, error: 'User not logged in'})
            return;
        }
        let output = [];
    
        const profileResponse = await client.query('SELECT firstname, lastname, phone_number, city, zipCode, street, houseNumber FROM profile where account_id=$1', [account_id]);
    
        console.log(profileResponse.rows[0]);
        if(profileResponse.rowCount){
            output = [
                profileResponse.rows[0].firstname, 
                profileResponse.rows[0].lastname, 
                profileResponse.rows[0].phone_number, 
                profileResponse.rows[0].city, 
                profileResponse.rows[0].zipcode,
                profileResponse.rows[0].street,
                profileResponse.rows[0].housenumber
            ];
        }
        res.json(output)
    }catch(e){
        console.log(e);
        res.status(500).json({ error: 'Internal server error' })
    }
}

//validate input !!! account_id czy jest i data czy jest zgodna z paternem
const createProfile = async (req, res) => {
    if(req.isAccountHaveProfile){
        console.log("Not valid request method - is POST but it should be PUT")
        updateProfile(req,res)
        return;
    }
    try{
        const account_id = req.user.account_id;
        const data = req.body;
        let output = [];

        const profileResponse = await client.query(`INSERT INTO profile(profile_id, account_id, firstname, lastname, phone_number, city, zipCode, street, houseNumber) 
                                                    Values (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8)`, 
                                                    [ account_id, data.firstname, data.lastname, data.phone_number, data.city, data.zipCode, data.street, data.houseNumber ]);
    
        if(profileResponse.rowCount){
            output = {error: false, msg: 'Profile created'};
        }else{
            output = {error: true, msg: 'Profile not created'};
        }
        res.json(output)
    }catch(e){
        console.log(e);
        res.status(500).json({ error: 'Internal server error' })
    }
}

const updateProfile = async (req, res) => {
    if(!req.isAccountHaveProfile){
        console.log("Not valid request method - is PUT but it should be POST")
        createProfile(req,res)
        return;
    }
    try{
        let account_id = req.user.account_id;
        const data = req.body;
        let output = [];

        const profileResponse = await client.query(`update profile set firstname=$2, lastname=$3, phone_number=$4, city=$5, zipCode=$6, street=$7, houseNumber=$8 where account_id=$1`, 
                                                    [ account_id, data.firstname, data.lastname, data.phone_number, data.city, data.zipCode, data.street, data.houseNumber ]);
    
        if(profileResponse.rowCount){
            output = {error: false, msg: 'Profile updated'};
        }else{
            output = {error: true, msg: 'Profile not updated'};
        }
        res.json(output)
    }catch(e){
        console.log(e);
        res.status(500).json({ error: 'Internal server error' })
    }
}

//todo updateProfile, if SELECT firstname, lastname, phone_number, city, zipCode, street, houseNumber FROM profile where account_id=$1 exists then not create but update!!!
module.exports = {
    getProfile,
    createProfile,
    updateProfile
}