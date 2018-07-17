const router = require("express").Router();
const userRoutes = require("./user");
const reviewRoutes = require('./review');

// User Routes
router.use("/user", userRoutes);

//R;eview Routes
router.use("/reviews", reviewRoutes)

module.exports = router;
