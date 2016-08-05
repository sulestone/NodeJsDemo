import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

let Person = mongoose.model('Person', personSchema);

export default Person;