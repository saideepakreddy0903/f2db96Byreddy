var express = require('express');
var router = express.Router();

class product {
constructor(product1, product2, product3){
  this.product1=product1;
  this.product2=product2;
  this.product3=product3;
}
}
/* GET home page. */
router.get('/', function(req, res, next) {
  let N1=new product('Magazines',150,'Paper');
  let S2=new product('Candy',90,'Food');
  let E1=new product('Shampoo',200,'Hair');

  res.render('product', { title: 'Search Results product',product : [N1,S2,E1] });
});

module.exports = router;