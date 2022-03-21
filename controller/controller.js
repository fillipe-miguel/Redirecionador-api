let renderHomePage = (req, res) => {
	res.render('index', { error: false });
};

module.exports = { renderHomePage };
