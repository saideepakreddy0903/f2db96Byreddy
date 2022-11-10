var product = require('../models/product');
// List of all products
exports.product_list = function(req, res) {
res.send('NOT IMPLEMENTED: product list');
};
// for a specific products.
exports.product_detail = function(req, res) {
res.send('NOT IMPLEMENTED: product detail: ' + req.params.id);
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
exports.product_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: product update PUT' + req.params.id);
};