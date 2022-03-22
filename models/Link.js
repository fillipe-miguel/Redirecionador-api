const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: String,
	cliks: { type: Number, default: 0 },
	link: { type: String, required: true },
});

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;
