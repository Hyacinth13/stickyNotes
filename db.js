var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Note = new Schema({
	title: {type: String, required: true},
	content: String,
	updated: Date
});

mongoose.model("Note", Note);
mongoose.connect("mongodb://localhost/");