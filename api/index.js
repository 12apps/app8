var express= require('express');
var router = express.Router();
var notes = require('./notes')

// /api/v1/notes 
router.use('/notes', notes);


module.exports = router; 