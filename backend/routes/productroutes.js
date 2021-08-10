const express = require('express');

const router = express.Router();

const ProductController = require('../controller/productcontroller');

router.post('/registerRole',ProductController.registerProduct);
//http://localhost:3001/api/role/listrole
router.get('/listRole',ProductController.listProduct);

module.exports = router;