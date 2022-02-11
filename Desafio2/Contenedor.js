const fs = require('fs/promises');
const path = require('path');

class Contenedor {
	constructor(filename) {
		this.filename = filename;
	}

	async save(newData) {
		if (Array.isArray(newData)) {
			try {
				const data = JSON.parse(
					await fs.readFile(path.join(__dirname, this.filename))
				);

				newData.forEach(item => {
					data.push(item);
				});

				// console.log(data);

				await fs.writeFile(
					path.join(__dirname, this.filename),
					JSON.stringify(data, null, 2)
				);
			} catch (err) {
				console.log(err);
			}
		} else {
			try {
				const data = JSON.parse(
					await fs.readFile(path.join(__dirname, this.filename))
				);

				data.push(newData);

				await fs.writeFile(
					path.join(__dirname, this.filename),
					JSON.stringify(data, null, 2)
				);
			} catch (err) {
				console.log(err);
			}
		}
	}

	async getById(id) {
		try {
			const data = JSON.parse(
				await fs.readFile(path.join(__dirname, this.filename))
			);

			return data.filter((item, index) => item.id === id);
		} catch (err) {
			console.log(err);
		}
	}

	async getAll() {
		try {
			return JSON.parse(await fs.readFile(path.join(__dirname, this.filename)));
		} catch (err) {
			console.log(err);
		}
	}

	async deleteById(id) {
		try {
			const data = JSON.parse(
				await fs.readFile(path.join(__dirname, this.filename))
			);

			const newData = data.filter((item, index) => item.id !== id);

			console.log(newData);

			await fs.writeFile(
				path.join(__dirname, this.filename),
				JSON.stringify(newData, null, 2)
			);
		} catch (err) {
			console.log(err);
		}
	}

	async deleteAll() {
		try {
			await fs.writeFile(path.join(__dirname, this.filename), '[]');
		} catch (err) {
			console.log(err);
		}
	}
}

const container = new Contenedor('products.json');

// Pequeño problema, si haces save y deleteById en la misma ejecución del archivo se guarda la información mal. Estimo que es porque el delete agarra la info antes de que el save la modifique, pero no estoy seguro.

// container.save([
// 	{
// 		title: 'Escuadra',
// 		price: 123.45,
// 		thumbnail:
// 			'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
// 		id: 1,
// 	},
// 	{
// 		title: 'Calculadora',
// 		price: 234.56,
// 		thumbnail:
// 			'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
// 		id: 2,
// 	},
// 	{
// 		title: 'Globo Terráqueo',
// 		price: 345.67,
// 		thumbnail:
// 			'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
// 		id: 3,
// 	},
// ]);

// container.deleteById(3)
// container.getById(1).then(res => console.log(res));
// container.getAll().then(res => console.log(res));
