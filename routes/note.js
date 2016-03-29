var express = require('express');
var mongoose = require('mongoose');
var Note = mongoose.model('Note');
var router = express.Router();

//GET Note page
router.get('/:id', function(req,res, next) {
	Note.findById(req.params.id, function(err,note) {
		res.render('note', { note: note });
	});
});

module.exports = router;
