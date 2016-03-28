var express = require('express');
var mongoose = require('mongoose');
var Note = mongoose.model('Note');
var router = express.Router();



//GET Notes 
router.get('/', function(req, res, next) {
 Note.find( function ( err, notes, count ) {
   res.render('index', { notes : notes });
 });
});

//POST  a new note
router.post('/', function(req, res, next){
	new Note({
		title:req.body.title,
		content: req.body.content,
		updated_at: Date.now()
	}).save( function(err, note, count) {
		res.redirect('/'); // ('/' to redirect to index page)
	});
});

//GET a specific note
router.get('/:id', function(req, res, next){
	Note.findById(req.params.id, function(err, note) {
		res.render('index', {note: note});
	});
});

//EDIT notes
router.post('/edit/:id', function(req, res, next) {
 Note.findById( req.params.id, function(err, note) {
   note.title = req.body.title,
   note.content = req.body.content,
   note.updated_at = Date.now();
   note.save( function(err, note, count) {
     res.redirect('/');
   });
 });
});

//DELETE a note
router.post('/:id', function(req, res, next) {
 Note.findById(req.params.id, function(err, note) {
   note.remove( function(err, note) {
     res.redirect('/');
   });
  });
});

module.exports = router;
