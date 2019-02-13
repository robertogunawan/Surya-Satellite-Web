const express = require('express');
const app = express();
const path = require('path');

const http = require('http');
const server = http.createServer(app);

/**
 * Setting Up View Engine Template
 */
 app.set('view engine', 'ejs');
 app.set('views', './views');

/**
 * Specify the root directory
 * to serve static files such as images, css, and js files
 */
 
app.use(express.static('views'));


 /**
  * Under Maintenance Default Homepage
  */
 app.get('*',function(req,res){
     res.render('under-maintenance');
 });

server.listen('8080', function(){
    console.log('Server Started on port 8080');
});
