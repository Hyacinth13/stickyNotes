var express = require('express');
var router = express.Router();
//GET Note page
router.get('/', function(req,res, next) {
	res.render('note', {note:[], title: 'My Sticky Notes'});
});
module.exports = router;
