const express = require("express");

const router = express.Router();

const StoreController = require("../controller/storecontroller");

router.post('/registerStore',StoreController.registerStore);

router.get('listStore',StoreController.listStore);

