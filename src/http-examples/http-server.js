import http from 'http';
import fs from 'fs';

// ***********Rendering Plain text to the browser/client*************

// http.createServer(function(req, res) {

//     // MIME Type - Multi-purpose Mail Extension - tells the browser what kind of transmission to expect
//     res.writeHead(200, { 'content-Type': 'text/plain'});
//     res.end('Hello World');

// }).listen(1338, '127.0.0.1');

// export default http;


// // **********Rendering an HtML file to the browser *******************

// http.createServer(function(req, res) {

//     // MIME Type - Multi-purpose Mail Extension - tells the browser what kind of transmission to expect
//     res.writeHead(200, { 'content-Type': 'text/html'});
//     let html = fs.readFileSync(__dirname + '/index.html');
//     res.end(html);

// }).listen(1338, '127.0.0.1');



// // **********Rendering Dynamic template and html to the browser *******************

// http.createServer(function(req, res) {

//     // MIME Type - Multi-purpose Mail Extension - tells the browser what kind of transmission to expect
//     res.writeHead(200, { 'content-Type': 'text/html'});
//     let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
//     // utf8 allows us to convert the return to the html  variable to a string
//     let name = 'Dustin';
//     html = html.replace('{name}', name);
//     res.end(html);

// }).listen(1338, '127.0.0.1');

// // **********Returning JSON DATA to the browser *******************

// http.createServer(function(req, res) {

//     // MIME Type - Multi-purpose Mail Extension - tells the browser what kind of transmission to expect
//     res.writeHead(200, { 'content-Type': 'application/json'});
//     var obj = {
//         firstname: 'John',
//         lastname: 'Doe'
//     };
//     // serialization takes place in Nodejs to send the obj in JSON format to the client
//     res.end(JSON.stringify(obj));

// }).listen(1338, '127.0.0.1');

// // *********Routing - Mapping HTPP Request to content *************
// http.createServer(function (req, res) {
//     if (req.url === '/') {
//         res.writeHead(200, { 'content-Type': 'text/html' });
//         fs.createReadStream(__dirname + '/index2.html').pipe(res);
//     }

//     else if (req.url === '/api') {

//         res.writeHead(200, { 'content-Type': 'application/json' });
//         var obj = {
//             firstname: 'John',
//             lastname: 'Doe'
//         };
//         // serialization takes place in Nodejs to send the obj in JSON format to the client
//         res.end(JSON.stringify(obj));
//     }
//     else {
//         res.writeHead(400, {'content-Type': 'text/html'});
//         let errorPage = fs.readFileSync(__dirname + '/error.html');
//         res.end(errorPage);
//     }

// }).listen(1338, '127.0.0.1');