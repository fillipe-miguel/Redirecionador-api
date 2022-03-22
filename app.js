const PORT = 3232;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const linksRouter = require('./routes/linksRoutes');

// ======== USADO PARA COLOCAR A FORÇA ALGUNS DADOS ========
// let linkA = new Link({
// 	name: 'youtube',
// 	description: 'Link para o youtube!',
// 	link: 'https://www.youtube.com.br',
// });

// let linkB = new Link({
// 	name: 'facebook',
// 	description: 'Link para o youtube!',
// 	link: 'https://www.facebook.com',
// });

// linkA.save().then((doc) => {
// 	console.log(doc);
// });
// linkB.save().then((doc) => {
// 	console.log(doc);
// });

// Para os dados serem adicionados no body
app.use(express.urlencoded({ extended: true }));

// Setando as caracteristicas do ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

mongoose
	.connect('mongodb://127.0.0.1:27017/links')
	.then(() => {
		console.log('Conectado com sucesso!');
	})
	.catch((error) => {
		console.log(error);
	});

// ANTIGA /LINK
app.use('/', linksRouter);

app.listen(PORT, () => {
	console.log(`ABERTO ouvindo a porta ${PORT}`);
});
