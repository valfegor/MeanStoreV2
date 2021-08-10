const express = require("express");

const router = express.Router();

const StoreController = require("../controller/storecontroller");

router.post('/registerstore',StoreController.registerStore);
//http://localhost:3001/api/role/listrole
router.get('/liststore',StoreController.listStore);

//router es el que esta guardando toda la informacion
module.exports = router;