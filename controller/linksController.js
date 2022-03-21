const Link = require('../models/Link');

let returnAll = async (req, res) => {
	try {
		let documents = await Link.find();
		res.send(documents);
	} catch (error) {
		res.send(error);
	}
};

let redirect = async (req, res) => {
	let name = req.params.name;

	try {
		// Deixo name aqui porque bate com o banco de dados !!
		let document = await Link.findOne({ name });
		res.redirect(document.link);
	} catch (error) {
		res.send(`Ouve um erro ${error}`);
	}
};

let addLink = async (req, res) => {
	let link = new Link(req.body);
	console.log(link);
	console.log(req.body);

	try {
		let document = await link.save();
		res.send(document);
	} catch (error) {
		res.send(error);
	}
};

module.exports = { redirect, returnAll, addLink };
