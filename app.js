let express = require('express');
let path = require('path');
//create a new express application
let app = express();

//set global path to all views
let viewPath = path.join(__dirname,'views');
//create home page route handler
let home = (req, res) => {
    if(req.url==='/' || req.url ==='/home'){
        //res.writeHead(200, {'Content-Type': 'text/html'});
        // res.write('<h1>Home</h1>');
        res.sendFile(`${viewPath}/index.html`);

        //res.end();
    }
    else{
        //url not found
        res.writeHead((404), {'Content-Type': 'text/html'});
        res.write('<h1>Not found</h1>');
        res.end();
    }
}

let about = (req, res) => {
   // res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write('<h1>About</h1>');
    res.sendFile(`${viewPath}/about.html`);
    //res.end();
}
let contact = (req, res) => {
    //res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write('<h1>Contact</h1>');
    res.sendFile(`${viewPath}/contact.html`);
    //res.end();
}

let greet = (req, res) => {
    res.writeHead(200, {'content-Type': 'text/html'});
    res.write(`<h1>Hello ${req.params.name}</h1>`);
    res.end();
}

let redirect = (req, res) => {
    console.log('Redirecting Home.....');
    res.redirect('/');

}
//route handling
app.use('/about', about);
app.use('/contact', contact);
app.use('/greet/:name', greet);
app.use('/redirect', redirect);
app.use('/' , home);
// start the server
app.listen(3000);
console.log('Express is running....');