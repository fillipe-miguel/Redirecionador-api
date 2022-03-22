const Link = require('../models/Link');

let linksController = {
	returnAll: async (req, res) => {
		try {
			let links = await Link.find();
			res.render('all', { links });
		} catch (error) {
			res.render('error', { error });
		}
	},

	renderAdd: async (req, res) => {
		res.render('addLinks');
	},

	redirect: async (req, res) => {
		let name = req.params.name;

		try {
			// Deixo name aqui porque bate com o banco de dados !!
			let document = await Link.findOne({ name });
			res.redirect(document.link);
		} catch (error) {
			res.render('error', { error });
		}
	},

	renderEdit: async (req, res) => {
		let id = req.params.id;

		try {
			let doc = await Link.findById(id);
			res.render('editLink', { doc });
		} catch (error) {
			res.render('error', { error });
		}
	},

	addLink: async (req, res) => {
		let link = new Link(req.body);

		try {
			let document = await link.save();
			console.log(document);
			res.redirect('/');
		} catch (error) {
			res.render('error', { error });
		}
	},

	editLink: async (req, res) => {
		let link = {
			name: req.body.name,
			description: req.body.description,
			link: req.body.link,
		};

		try {
			await Link.findByIdAndUpdate(req.body.id, link);
			res.redirect('/');
		} catch (error) {
			res.render('error', { error });
		}
	},

	deleteLink: async (req, res) => {
		let id = req.params.id;

		try {
			let document = await Link.findByIdAndDelete(id);
			res.status(200).send(document);
		} catch (error) {
			res.status(404).send(error);
		}
	},
};

module.exports = linksController;
