const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');


router.get('/notes', (req, res) => {
    console.info(`Request notes`);
    readFromFile('./db/db.json', 'utf-8').then((data) =>{ 
        console.log(data);
        res.send(data);
    });
  });

router.post('/notes', (req, res) => {

    console.info(`POSTED`);

    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        api_id: uuid(),
      };
  console.log(req.body);
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully!!`);
    } else {
      res.error('Error in adding note.');
    }
  });

  router.delete('/notes/:id', (req, res) =>{
  deleteNote(newNote, req.params.id);
  res.json(newNote);  
});


module.exports = router;