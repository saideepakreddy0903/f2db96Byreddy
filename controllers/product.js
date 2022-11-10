var product = require('../models/product');
// List of all products
//
exports.product_list = async function(req, res) {
     try{
        theProducts = await product.find();
        res.send(theProducts);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific products.
exports.product_detail = function(req, res) {
res.send('NOT IMPLEMENTED: product detail: ' + req.params.id);
};
// Handle product create on POST.
exports.product_create_post = async function (req, res) {
    console.log(req.body)
    let document = new product();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"product_type":"goat",  "size":"large" , "cost":12}
    document.name = req.body.name;
    document.duration = req.body.duration;
    document.director = req.body.director;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle product delete form on DELETE.
exports.product_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: product delete DELETE ' + req.params.id);
};
// Handle product update form on PUT.
exports.product_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: product update PUT' + req.params.id);
};
exports.product_view_all_Page = async function (req, res) {
    try {
        theproduct = await product.find();
        res.render('product', { title: 'product Search Results', results: theproduct });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};