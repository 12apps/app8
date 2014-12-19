var express= require('express');
var router = express.Router();
var notesController = require('./note.controller');

function sanitizeBody(req, res, next){
  if (req.body._id) {delete req.body._id};
  req.test = "in the middleware"
  next()
}

// /api/v1/notes/ --> get all notes isArray = true
router.get('/', notesController.index);

// /api/v1/notes/id --- return one note
router.get('/:id' , notesController.read);

// create note
router.post('/' ,sanitizeBody, notesController.create);

// update note
router.put('/:id' ,sanitizeBody, notesController.update);

// delete one note
router.delete('/:id' , notesController.destroy);


module.exports = router; 