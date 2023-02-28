const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise= global.Promise;

mongoose.connect(dbConfig.url,{
    useNewUrlparser:true
}).then(()=>{
    console.log("succesful connection");
}).catch(err=>{
    console.log("can not connect to db",err);
    process.exit();
});


app.get('/',(req,res) =>{
    res.json({
        "message":"welcome to api home page" 
    });
});

require('./app/app/routes/note.routes.js')(app);
app.listen(3000,()=>{
    console.log("server is running on port:3000");
});