var mongoose = require('mongoose');
var Schema = mongoose.Schema ;

var NoteSchema = new Schema({
  title: { type: String , default: "new note" },
  body: String ,
  lat: Number ,
  lon: Number 
});


module.exports = mongoose.model('note',NoteSchema);