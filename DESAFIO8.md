mongosh
use ecommerce

db.productos.insertMany([
  {
    title: 'Producto 1',
    price: 100,
    thumbnail:
      'https://images.unsplash.com/photo-1650197910777-880f607e6d3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    title: 'Producto 2',
    price: 1000,
    thumbnail:
      'https://images.unsplash.com/photo-1650197910777-880f607e6d3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    title: 'Producto 3',
    price: 250,
    thumbnail:
      'https://images.unsplash.com/photo-1650197910777-880f607e6d3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    title: 'Producto 4',
    price: 2500,
    thumbnail:
      'https://images.unsplash.com/photo-1650197910777-880f607e6d3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    title: 'Producto 5',
    price: 3000,
    thumbnail:
      'https://images.unsplash.com/photo-1650197910777-880f607e6d3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    title: 'Producto 6',
    price: 4500,
    thumbnail:
      'https://images.unsplash.com/photo-1650197910777-880f607e6d3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    title: 'Producto 7',
    price: 500,
    thumbnail:
      'https://images.unsplash.com/photo-1650197910777-880f607e6d3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    title: 'Producto 8',
    price: 3500,
    thumbnail:
      'https://images.unsplash.com/photo-1650197910777-880f607e6d3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    title: 'Producto 9',
    price: 4250,
    thumbnail:
      'https://images.unsplash.com/photo-1650197910777-880f607e6d3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    title: 'Producto 10',
    price: 5000,
    thumbnail:
      'https://images.unsplash.com/photo-1650197910777-880f607e6d3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
]);

db.getCollection('productos').find()

db.mensajes.insertMany([{ email: 'Email 1', message: 'Mensaje 1', date: 1650325366477 },{ email: 'Email 2', message: 'Mensaje 2' },{ email: 'Email 3', message: 'Mensaje 3', date: 1650325366477 },{ email: 'Email 4', message: 'Mensaje 4', date: 1650325366477 },{ email: 'Email 5', message: 'Mensaje 5', date: 1650325366477 },{ email: 'Email 6', message: 'Mensaje 6', date: 1650325366477 },{ email: 'Email 7', message: 'Mensaje 7', date: 1650325366477 },{ email: 'Email 8', message: 'Mensaje 8', date: 1650325366477 },{ email: 'Email 9', message: 'Mensaje 9', date: 1650325366477 },{ email: 'Email 10', message: 'Mensaje 10', date: 1650325366477 }]);

db.getCollection('mensajes').find()

db.productos.countDocuments()
db.mensajes.countDocuments()

db.productos.insertOne({title: 'Producto Individual',price: 2785,thumbnail: 'https://images.unsplash.com/photo-1650197910777-880f607e6d3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'})

db.productos.find({ price: { $lt: 1000}})
db.productos.find({ $and: [{price: { $gt: 1000 }}, { price: {$lt: 3000}} ]})
db.productos.find({ price: { $gt: 3000}})

db.productos.updateMany({},{ $set: {stock: 100}})
db.productos.updateMany({ price: { $gte: 4000 }},{ $set: {stock: 0}})

db.productos.deleteMany({ price: { $lt: 1000}})


 use admin
db.createUser({ user: "pepe", pwd: "asd456", roles: [{ role: "read", db: "ecommerce"}]})

 Exit shell

mongosh -u pepe -p asd456 --authenticationDatabase admin
db.productos.find()

db.productos.inserOne({ title: 'string'})

Todo fuciona bien, pero no estoy pudiendo decifrar que archivo es el correpondiente a esa base de datos, por eso no lo estoy incluyendo en la entrega, agradezco ayuda respecto a esto.