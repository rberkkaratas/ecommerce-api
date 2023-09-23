const router = require("express").Router();
const auth = require("./auth.routes");
const product = require("./product.routes");

router.use(auth);
router.use(product);

module.exports = router;