class Usuario {
	nombre;
	apellido;
	libros = [];
	mascotas = [];

	constructor(nombre, apellido, libros, mascotas) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.libros = libros;
		this.mascotas = mascotas;
	}

	getFullName() {
		return `${this.nombre} ${this.apellido}`;
	}

	addMascota(mascota) {
		this.mascotas.push(mascota);
	}

	countMascotas() {
		return this.mascotas.length;
	}

	addBook(nombre, autor) {
		this.libros.push({
			nombre,
			autor,
		});
	}

	getBookNames() {
		return this.libros.map(libro => {
			return libro.nombre;
		});
	}
}

const user = new Usuario(
	'Francisco',
	'Messina',
	[
		{ nombre: 'La comunidad del anillo', autor: 'J.R.R Tolkien' },
		{ nombre: 'Camino de reyes', autor: 'Brandon Sanderson' },
	],
	['Perro', 'Gato', ' Pez']
);

user.addMascota('Conejo');
user.addBook('Mistborn', 'Brandon Sanderson');

console.log(user.getFullName());
console.log(user.countMascotas());
console.log(user.getBookNames());
