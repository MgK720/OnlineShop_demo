const client = require('../../databaseConnection');

module.exports.getAllCategories = async (req, res) => {
    try{
        const response = await client.query('SELECT item_category_name FROM item_category');
        let output = []
        if(response.rowCount){
            output = response.rows.map(element => {
                return element.item_category_name;
            })
        }
        res.json(output)
    }catch (e){
        console.log(e);
        res.status(500).json({ error: 'Internal server error' })
    }
}