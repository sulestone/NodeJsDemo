// Import node module
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

import Person from './model/PersonModel';

mongoose.connect('mongodb://localhost/node_demo');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Mongoose is connected!');
});


// var john = Person({
//     firstname: 'John',
//     lastname: 'Doe',
//     address: '555 Main St.'
// });

// john.save(function(err) {
//     console.log(john);
//     if(err) throw err;

//     console.log('person saved!');
// });

// var jane = Person({
//     firstname: 'John',
//     lastname: 'Doe',
//     address: '555 Main St.'
// });

// jane.save(function(err) {
//     if(err) throw err;

//     console.log('person saved!');
// });

// app.get('/', function (req, res, next) {
//     console.log('Request Url:' + req.url);

//     // get all the users
//     Person.find({}, function(err, users) {
//         if(err) throw err;
//         res.json(users);
//         //object of all the users
//         console.log(users);
//     });
//     // res.render("hello");
// });

// app.get('/api', function(req, res) {
//     // we can give this method a js object and it will convert it to a json string
//     res.json({ firname: 'John', lastname: 'Doe'});
// });

// *******************************GET DATA From the Client to Save to DB*********************************

let urlencodedParser = bodyParser.urlencoded({ extended: false});

app.use('/', express.static(path.join(__dirname, 'views/')));
app.use('/home', express.static(path.join(__dirname, 'views/home.html')));
app.use('/form', express.static(path.join(__dirname, 'views/form.html')));

app.post('/person', urlencodedParser, (req, res)=> {
   
   let person = Person({firstname:req.body.firstname,
                        lastname:req.body.lastname,
                        address: '50 parks land'});
    person.save((err)=> {
      if(err) {
        throw err;
      }
      res.send('thank you!!');
    })

});

app.get('/api/person/:firstname', (req,res)=>{
  console.log(req.params.firstname)
  Person.find({firstname: req.params.firstname}, (err, person)=> {
    if(err) {
      throw err;
    }
    res.json(person);
  })
});

const server = app.listen(3001, ()=> {
  
  const {address, port} = server.address();

  console.log(`MongoDB App listening on local${address}${port}`);
});
// Exporting an object as the default import for this module
export default app;
