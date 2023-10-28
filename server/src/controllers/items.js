const client = require('../../databaseConnection');

module.exports.getItemsByCategory = async (req, res) => {
    const { category } = req.params;
    let output = [];

    const categoriesResponse = await client.query('SELECT item_category_id FROM item_category where item_category_name=$1', [category]);

    if(categoriesResponse.rowCount){
        const categoryID = categoriesResponse.rows[0].item_category_id;

        const itemsResponse = await client.query('SELECT * FROM item where item_category_id=$1', [categoryID]);
        output = itemsResponse.rows.map(element => {
            return {
                id: element.item_id,
                name: element.item_name,
                imgsrc: element.item_imgsrc,
                price: element.item_price,
                quantity: element.item_quantity,  
            };
        });
    }
    res.json(output)
}