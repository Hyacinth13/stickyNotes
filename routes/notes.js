var express = require('express');
var mongoose = require('mongoose');
var Note = mongoose.model('Note');
var router = express.Router();

router.get('/', function(req, res, next) {
	Note.find(function(err, notes, count) {
		res.render('notes', {notes:notes});
	});
});

module.exports = router;