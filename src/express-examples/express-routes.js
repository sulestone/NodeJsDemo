import express from 'express';

const app = express();

// A simple route that renders hello world using express
// app.get('/', (req,res) => {
//   res.send('Hello World');
// });



// //********************************Rendering Hello World************************************
//checks if an environment variable is available or if not, which it wouldnt be on our local machine
// var portNumber = process.env.PORT || 3000; 

//HTTP Methods - Specifying the type of action the request wishes to make(verbs)
// app.get('/', function(req, res) {
//     res.send(
//         //unlike the http module express doesnt need the content-type specified, it can figure it out
//         "<html><head><title>Hello World</title></head><body><h1>Hello World</h1></body></html>"
//     );
// });



//*************************************** STATIC FILES AND MIDDLEWARE ***************************************
// Middleware - Code that sits between two layers of software. In Express case, sitting between the request and the response.

// Adding middleware with the express use method 
// app.use('/assets', express.static(__dirname + '/public')); 
// Other middleware include
    /*
    cookieParser - for getting browser cookies
    passport - for authenication
    body-parser
    express-debug
    */
// creating my own middleware - allows to console.log the url and then go to url
// app.use('/api', function(req, res, next) {
//     console.log('Request Url: ' + req.url);
//     next();
// });

// app.get('/', function(req, res) {
// 	res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello world!</h1></body></html>');
// });

// app.get('/person/:id', function(req, res) {
//     res.send(
//         '<html><head><title>Hello World</title></head><body><h1>Person: ' +
//         req.params.id + '</h1></body></html>'
//     );
// });

// app.get('/api', function(req, res) {
//     // we can give this method a js object and it will convert it to a json string
//     res.send({ firname: 'John', lastname: 'Doe'});
// });

// *********************************bodyParser Middleware********************************

// import path from 'path';
// import bodyParser from 'body-parser';

// let urlencodedParser = bodyParser.urlencoded({ extended: false});

// app.use('/assets', express.static(__dirname + '/public'));

// app.use('/', express.static(path.join(__dirname, 'views/')));
// app.use('/home', express.static(path.join(__dirname, 'views/home.html')));
// app.use('/form', express.static(path.join(__dirname, 'views/form.html')));

// app.post('/person', urlencodedParser, function(req, res) {
//     res.send('thank you!');
//     console.log(req.body.firstname);
//     console.log(req.body.lastname);
// });

// const server = app.listen(process.env.port || 3000, ()=> {

//     const {address, port} = server.address();

//     console.log(`App Listening on local${address}${port}`);
// });

// export default app;
