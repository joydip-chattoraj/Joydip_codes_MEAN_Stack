var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var cors=require('cors');
var path=require('path');

var app=express();
const port=3000;
 app.use(cors({
    origin: '*'
  }));
 app.use(bodyparser.json());
const route=require('./routes/route');
app.use('/api',route);

//adding static files
//app.use(express.static(path.join(__dirname,'public')));
//testing - if we go to http://localhost:3000 then what to render by server
app.get('/',(req,res)=>{
  res.send('This is node.js  express server.');
});

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist',{useNewUrlParser: true});
//connection check - success
mongoose.connection.on('connected',()=>{
console.log('connected to mongodb at default port @27017.');
});
//connection check - error
mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('Error connecting DB.');
    }    
    });

app.listen(port,()=>{
    console.log('server started at port '+port);
});


