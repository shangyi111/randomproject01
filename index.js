const path = require('path');
// const bodyParser = require('body-parser');
const express = require('express');
const Datastore = require('nedb');

const app = new express;
app.listen(4000,()=>{
	console.log('App listening to 4000');
});
app.use(express.static('home'));
app.use(express.json({ limit: '1mb' }));
// app.use(bodyParser.json()); // <-- this guy!


const database = new Datastore('database.db');
database.loadDatabase();



// app.get('/',(req,res)=>{
// 	console.log('hello')
// 	res.sendFile(path.resolve(__dirname,'home/index.html'));
// });
// app.get('/create', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'create/index.html'));
// });
app.get('/api',(req,res)=>{
	database.find({},(err,data)=>{
		if(err){
			res.end();
			return;
		}
		res.json(data);
	})
})
app.post('/api',(req,res)=>{
	const data = req.body;
	// console.log(req);
	const timestamp = Date.now();
	data.timestamp=timestamp;
	database.insert(data);
	res.json(data);
})



