//var express = require('express');
//constproduct_controlers= require('../controllers/product'); 
//var router = express.Router();


// classproduct {
//   constructor(product_Name,product_flavour, price){
//          this.product_Name=product_Name;
//          this.age=product_age;
//          this.price=product_price;
//   }
//}
/* GET home page. */
//router.get('/', function(req, res, next) {

// res.render('product', { title: 'Search Resultsproduct',product : [D1,D2,D3] });});
//module.exports = router;
var express = require('express');

var router = express.Router();

const product_controlers= require('../controllers/product');

/* GETproducts */
router.get('/', product_controlers.product_view_all_Page );

module.exports = router;

// GET request for oneproduct.
router.get('/products/:id', product_controlers.product_detail);


/* GET detailproduct page */
router.get('/detail', product_controlers.product_view_one_Page);

/* GET createproduct page */
router.get('/create', product_controlers.product_create_Page);

/* GET create update page */
router.get('/update', product_controlers.product_update_Page);

/* GET deleteproduct page */
router.get('/delete', product_controlers.product_delete_Page);
