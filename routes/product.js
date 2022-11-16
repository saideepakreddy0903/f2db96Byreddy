var express = require('express');
const product_controlers= require('../controllers/product'); 
var router = express.Router();

/*class product {
  constructor(product_name, product_use, product_cost)
  {
    this.product_name = product_name;
    this.product_use = product_use;
    this.product_Size = product_Size;
  }
}*/

/* GET home page. */
/*router.get('/', function(req, res, next) {
  let W1 = new product("Glass", "white", 100);
  let W2 = new product("Walk-in", "black", 150);
  let W3 = new product("Wooden", "brown", 200);

  res.render('product', { title: 'Search Results product',product : [W1,W2,W3]});
});*/
router.get('/', product_controlers.product_view_all_Page ); 
router.get('/:id', product_controlers.product_detail);
router.put('/:id', product_controlers.product_update_put);
module.exports = router;
