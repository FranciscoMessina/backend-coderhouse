const express = require('express');
const Contenedor = require('./Contenedor');

const app = express();

const routes = require('./routes.js');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.send('index.html');
});

app.use('/api/productos', routes);

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({ err, message: 'Something went wrong, sorry' });
});

app.listen('8080', () => {
	console.log(`Servidor corriendo en puerto 8080`);
});

app.on('error', err => {
	console.log(`Algo salio mal: ${err}`);
});
