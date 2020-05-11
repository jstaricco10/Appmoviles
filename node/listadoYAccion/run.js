var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/admin', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("CONECTADO A LA BASE DE DATOS!");
});
var personaSchema = new mongoose.Schema({
	name: String,
	apellido: String,
	edad: Number
  });
var persona = mongoose.model('persona', personaSchema);

//ahora puedo hacer personas con este modelo y hacerle save en la base o otras cosas de mongoose	
var personas; //esto simula el array de objetos que obtengo de mongo, tengo que
//obtener en esta parte los elementos de la base



var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

var app = express();

var port = process.env.PORT || 3000;
app.use(serveStatic(path.join(__dirname, 'public')));

app.listen(port,  function () {  
	console.log('listening on port:', port);
});

//para que se pueda enviar data de los formularios hacia nosotros 
app.use(express.urlencoded({extended: false}));
app.use(express.json()); // le vamos a enviar la data en json

//rutas url


app.get('/personas',(req,res) => {
	// aca tengo que hacer con mongo mi find all y ponerlo en la respuesta
	persona.find({},function(err,per){
		if (err){ 
			res.send("something went wrong!");
			next();
		}
		console.log(per);
		res.json(per);
	});
});
//crear persona
app.post('/personas', (req,res) => {

	console.log(req.body);	
	//entonces creo
	let nuevaPersona = persona.create({
		name: req.body.name,
		apellido: req.body.apellido,
		edad : req.body.edad
	});
	res.json("Se agrego la persona.");
});

//update persona
app.put('/personas/:id', (req,res) => {

	console.log(req.body);	
	//entonces actualizo
	persona.findByIdAndUpdate({_id:req.params.id},{
		name: req.body.name,
		apellido: req.body.apellido,
		edad : req.body.edad
	}, function(err){
		if(err) console.log(err);
		res.json("Se actualizo la persona.");
	});
});



//delete persona de la base
app.delete('/personas/:id', (req,res) => {
	//console.log(req.params);
	console.log(req.params);
	const id = req.params.id;
	// hacemos el delete con mongoose
	persona.findByIdAndDelete({_id: id}, function(err){
		if(err) console.log(err);
		res.json("Se elimino.");
	});
	//res("Se elimino el registro con exito!")
});
