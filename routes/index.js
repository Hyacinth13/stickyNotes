var express = require('express');
var router = express.Router();

//GET homepage
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Notes' });
});
//GET Notes 
router.get('/', function(req, res, next) {
 Note.find( function ( err, notes, count ) {
   res.render('index', { notes : notes });
 });
});
//GET a specific note
router.get('/:id', function(req, res, next){
	Note.findById(req.params.id, function(err, note) {
		res.render('note', {note: note});
	});
});
//POST  a new note
router.post('/', function(req, res, next){
	new Note({
		title:req.body.name,
		description: req.body.description,
		updated_at: Date.now()
	}).save( function(err, note, count) {
		res.redirect('/'); // ('/' to redirect to index page)
	});
});
//EDIT notes
router.post('/edit/:id', function(req, res, next) {
 Note.findById( req.params.id, function(err, note) {
   note.title = req.body.name,
   note.description = req.body.description,
   note.updated_at = Date.now();
   .save( function(err, note, count) {
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
