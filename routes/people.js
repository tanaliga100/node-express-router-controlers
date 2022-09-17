const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);

// // GET METHOD
// router.get("/", getPeople);

// // POST METHOD
// router.post("/", createPerson);
// // ANOTHER ROUTE
// router.post("/postman", createPersonPostman);

// // PUT METHOD
// router.put("/:id", updatePerson);

// // DELETE METHOD
// router.delete("/:id", deletePerson);

module.exports = router;
