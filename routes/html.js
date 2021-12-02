const router = require("express").Router();
const path = require('path');

// Serve notes.html file when user hit /notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Serve index.html file when user hit other routes beside notes
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;