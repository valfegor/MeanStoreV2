const express = require('express');

const router = express.Router();

const ProductController = require('../controller/productcontroller');

router.post('/registerProduct',ProductController.registerProduct);
router.get('/listProduct',ProductController.listProduct);

