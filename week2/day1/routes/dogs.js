const { Router } = require("express");
const {
  getDogs,
  getDog,
  postDogs,
  putDogs,
  deleteDogs,
} = require("../controllers/dogs");

const router = Router();

router.post("/", postDogs);
router.get("/", getDogs);
router.get("/:id", getDog);
router.put("/:id", putDogs);
router.delete("/:id", deleteDogs);

module.exports = router;
