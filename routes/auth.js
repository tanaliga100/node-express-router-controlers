const express = require("express");
const router = express.Router();

// POST METHOD
router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`
    Welcome ${name}
    `);
  }
  return res.status(401).send("Please provide a credentials");
});

module.exports = router;
