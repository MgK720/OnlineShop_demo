const client = require('../../databaseConnection');

//validate input !!! account_id czy jest i data czy jest zgodna z paternem
const getProfile = async (req, res) => {
    const { account_id } = req.params;
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
}

//validate input !!! account_id czy jest i data czy jest zgodna z paternem
const createProfile = async (req, res) => {
    const { account_id } = req.params;
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
}

//todo updateProfile, if SELECT firstname, lastname, phone_number, city, zipCode, street, houseNumber FROM profile where account_id=$1 exists then not create but update!!!
module.exports = {
    getProfile,
    createProfile
}