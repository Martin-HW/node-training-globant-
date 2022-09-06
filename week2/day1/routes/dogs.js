const { Router } = require("express");
const { getDogs } = require("../controllers/dogs");

const router = Router();

router.get("/", getDogs);

module.exports = router;
