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

http.createServer(function (req, res) {
    MongoClient.connect(url, function(err, admin) {
		if (err) throw err;
		const adminDB = admin.db('admin');
          adminDB.collection("personas").find().toArray(function(err, result) {
            if (err) throw err;
			var strResultado = "";
			result.forEach(jugador =>{
				strResultado = strResultado + jugador.name + " " +jugador.apellido + " tiene "+ jugador.edad + " años." + "\n";

            });
            console.log(strResultado);
            res.write(strResultado);
            
            admin.close();

            res.end();
        });
    });
}).listen(port);



// MongoClient.connect(url, function(err, admin) {
// 		if (err) throw err;
// 		const adminDB = admin.db('admin');
//         adminDB.collection("personas").find().toArray(function(err, result) {
//                 if (err) throw err;
// 				//console.log(result);
// 				result.forEach(jugador =>{
// 					console.log(jugador.name + " " +jugador.apellido + " tiene "+ jugador.edad + " años.");
// 				});
//                 admin.close();
//         })
// });
