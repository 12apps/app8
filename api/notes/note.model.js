var mongoose = require('mongoose');

var Schema = mongoose.Schema ;

var NoteSchema = new Schema({
  title: { type: String , default: "new note" },
  Body: String ,
  lat: Number ,
  lon: Number 
});

NoteSchema.pre('save' , function(note){
  console.log('pre save event fired');
})
module.exports = mongoose.model(NoteSchema);