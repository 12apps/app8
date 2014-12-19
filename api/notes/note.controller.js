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
  var note = new Note(req.body);
  note.save(function(err , savedNote){
    if(err) return handelError(err, res);
    res.status(201).json(note);
  })
}

// {body: 'this is fun'}
exports.update = function(req, res){
  Note.findByIdAndUpdate(req.params.id , req.body,function(err, note){
    if(err) return handelError(err, res);
    res.status(201).json(note);
  });
}

exports.destroy = function(req, res){
  Note.findByIdAndRemove(req.params.id , function(err , deletedNote){
    if(err) return handelError(err, res);
    res.status(200).json(deletedNote);
  
  })
}

function handelError(err ,res){
  res.status(500).json(err);
}