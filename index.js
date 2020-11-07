const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const v1routes=require('route/v1.js');
mongoose.connect("mongodb://localhost:27017/collection",{
	useNewUrlParser:true
})
const port=3000;
const app=express();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/v1',v1routes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(port,console.log(`Example app listening at http://localhost:${port}`))


