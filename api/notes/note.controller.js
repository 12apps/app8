var mongoose = require('mongoose');
//var Note = require('./note.model');

exports.index = function(req, res){
console.log(' index hit');
}


exports.read = function(req, res){
console.log(' read hit');
}


exports.create = function(req, res){
console.log(' create hit');
}


exports.update = function(req, res){
console.log(' update hit');
}

exports.destroy = function(req, res){
console.log(' delete hit');
}