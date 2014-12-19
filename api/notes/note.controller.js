var mongoose = require('mongoose');
var Note = require('./note.model');

exports.index = function(req, res){
Note.find({} , function(err,notes){
  if(err) return handleError(err , res);
  res.status(200).json(notes); // array of notes
})
}


exports.read = function(req, res){
Note.findOne({_id: req.params.id }, function(err , note){
  if(err) return handelError(err, res);
    res.status(200).json(note);
})
}

// assume sending in the req.body 
//{
//  title: "FSdfF" , 
//    body: "fsdfd"
//}

exports.create = function(req, res){
  if( req.body._id) {delete req.body._id};
 var note = new Note(req.body);
  note.save(function(err , savedNote){
    if(err) return handelError(err, res);
    res.status(201).json(note);
  })
}


exports.update = function(req, res){
console.log(' update hit');
}

exports.destroy = function(req, res){
console.log(' delete hit');
}

function handelError(err ,res){
  res.status(500).json(err);
}