var product = require('../models/product'); 
 
// List of all product
exports.product_list = async function(req, res) { 
    try{ 
        theproduct = await product.find(); 
        res.send(theproduct); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }  
}; 
 
// for a specific Costume. 
exports.product_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await product.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle product create on POST. 
exports.product_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new product(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    //{"product_name":"Glass", "product_use":"mirror", "product_cost":100} 
    document.product_name = req.body.product_name; 
    document.product_use = req.body.product_use; 
    document.product_cost = req.body.product_cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 


// Handle product create on POST. 
exports.product_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: product create POST'); 
}; 
 
// Handle product delete form on DELETE. 
exports.product_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: product delete DELETE ' + req.params.id); 
}; 
 
// Handle product update form on PUT. 
exports.product_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await product.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.product_name)  
               toUpdate.product_name = req.body.product_name; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// VIEWS 
// Handle a show all view 
exports.product_view_all_Page = async function(req, res) { 
    try{ 
        theproduct = await product.find(); 
        res.render('product', { title: 'product Search Results', results: theproduct }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};