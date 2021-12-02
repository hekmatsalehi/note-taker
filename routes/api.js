const router = require("express").Router();
let data = require('../db/db.json')
const fs = require('fs');


currentId = data.length;

router.get('/api/notes', (req, res) => {
    return res.json(data);
});

router.post('/api/notes', (req, res) => {
    const newData = req.body;

    newData['id'] = currentId+1;
    currentId++;
    data.push(newData);
    generateNotes();

    return res.status(200).end();
});

router.delete('/api/notes/:id', (req, res) => {
    res.send('Delete request recieved!')
    const id = req.params.id;

    const idLess = data.filter((less) => {
        return less.id < id;
    });

    const idGreater = data.filter((greater) => {
        return greater.id > id;
    });

    data = idLess.concat(idGreater);

    generateNotes();
})

const generateNotes = () => {
    fs.writeFile('db/db.json', JSON.stringify(data), (err) => {
        if (err) throw err;
    });
}


module.exports = router;