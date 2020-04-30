const http = require('http');
const host = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Primer servidor con Node.Js');
});
server.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}`);
});




var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/admin";

MongoClient.connect(url, function(err, admin) {
		if (err) throw err;
		const adminDB = admin.db('admin');
        adminDB.collection("personas").find().toArray(function(err, result) {
                if (err) throw err;
				//console.log(result);
				result.forEach(jugador =>{
					console.log(jugador.name + " " +jugador.apellido + " tiene "+ jugador.edad + " años.");
				});
                admin.close();
        })
});


http.createServer(function (req, res) {
    MongoClient.connect(url, function(err, admin) {
		if (err) throw err;
		const adminDB = admin.db('admin');
        adminDB.collection("personas").find().toArray(function(err, result) {
            if (err) throw err;
			//var query = result;
			var strResultado = "";
			result.forEach(jugador =>{
				strResultado = strResultado + jugador.name + " " +jugador.apellido + " tiene "+ jugador.edad + " años." + "\n";

			});
			res.write(strResultado);
            admin.close();

            res.end();
        });
    });
}).listen(3000);








// var express = require('express');
// var path = require('path');
// var serveStatic = require('serve-static');

// var app = express();

// var port = process.env.PORT || 3000;
// app.use(serveStatic(path.join(__dirname, 'public')));

// app.listen(port,  function () {  
// 	console.log('listening on port:', port);
// });





// console.log("esto se hace");
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/admin', { useNewUrlParser: true,
// useUnifiedTopology: true
// });

// module.exports = mongoose;

// var Schema = mongoose.Schema;

// var personas = new Schema({
//     name: String,
//     apellido: String,
//     edad: Number
// });

// var personasModel = mongoose.model('personas', personas);


// //problema no logro que me devueva el documento en vez de la query en si

// var query = personasModel.find(function(err,doc){
//     if (err) return handleError(err);
//     if (doc){
//         console.log(doc.name);
//     }
// });

// http.get('/',function(req,res){
// 	personas.find()
// 	   .then(personas => {
// 		   res.json(personas);
// 		   console.log("Mi nombre es" + personas.name)})
// 	   .catch(err => res.status(404).json({ success: false }));
// });

