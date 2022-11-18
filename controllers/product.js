var product = require('../models/product');

// List of all products 

exports.product_list = async function (req, res) {
    try {
        theproducts = await product.find();
        res.send(theproducts);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// for a specific product. 
exports.product_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: product detail: ' + req.params.id);
};

// for a specific product. 
exports.product_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await product.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle product update form on PUT. 
exports.product_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await product.findById(req.params.id)
        // Do updates of properties 
        if (req.body.product_name)
            toUpdate.product_name = req.body.product_name;
        if (req.body.product_use) toUpdate.product_use = req.body.product_use;
        if (req.body.product_cost) toUpdate.product_cost = req.body.product_cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};

// Handle product delete on DELETE. 
exports.product_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await product.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};



// Handle product create on POST. 
exports.product_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: product create POST');
};

// Handle product delete form on DELETE. 
exports.product_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: product delete DELETE ' + req.params.id);
};

// Handle product update form on PUT. 
exports.product_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: product update PUT' + req.params.id);
};

// VIEWS 
// Handle a show all view 
exports.product_view_all_Page = async function (req, res) {
    try {
        theproducts = await product.find();
        res.render('products', { title: 'product Search Results', results: theproducts });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
exports.product_create_post = async function (req, res) {
    console.log(req.body)
    let document = new product();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"product_name":"balckforest","use":"vanilla","cost":250} 
    document.product_name = req.body.product_name;
    document.product_use = req.body.product_use;
    document.product_cost = req.body.product_cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle product update form on PUT.
exports.product_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await product.findById(req.params.id)
        // Do updates of properties
        if (req.body.product_name)
            toUpdate.product_name = req.body.product_name;
        if (req.body.product_use) toUpdate.product_use = req.body.product_use;
        if (req.body.product_cost) toUpdate.product_cost = req.body.product_cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

// Handle product delete on DELETE.
exports.product_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await product.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.product_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await product.findById(req.query.id)
        res.render('productdetail',
            { title: 'product Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a product.
// No body, no in path parameter, no query.
// Does not need to be async
exports.product_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('productcreate', { title: 'product Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a product.
// query provides the id
exports.product_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await product.findById(req.query.id)
        res.render('productupdate', { title: 'product Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
   };


 // Handle a delete one view with id from query
exports.product_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
        result = await product.findById(req.query.id)
        res.render('productdelete', { title: 'product Delete', toShow:
result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
}; 

