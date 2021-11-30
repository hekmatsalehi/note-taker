const router = require("express").Router();
const data = require("../db/db.json");

router.get("/notes", (req, res) => {
  res.json(data);
});

// Recieves a new note, add it to db.json and return it to the client
router.post("/notes", (req, res) => {
  
});

// Delete the notes one by one
router.delete("/notes/:id", (req, res) => {

});

module.exports = router;
