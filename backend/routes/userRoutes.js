const express = require("express");
const { registerCustomer } = require("../controllers/userController");

const router = express.Router();

router.post("/register/customer", registerCustomer);


module.exports = router;
