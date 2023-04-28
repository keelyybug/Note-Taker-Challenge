const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');



router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

router.get('/notes', (req, res) => {
    console.info(`Request to add note received.`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
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