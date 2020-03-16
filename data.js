var mongoose = require('mongoose'); //mongoose ->odm ,object data mapper
mongoose.connect('mongodb://localhost/cat_app'); //database
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});
var Cat = mongoose.model("Cat", catSchema); //collections
Cat.create();
// Adding a new cat to the database
// var Ajay = new Cat({
//     name: "Ajay",
//     age: 11,
//     temperament: "Angry"
// });
// Ajay.save(function (err, cat) {
//     if (err) {
//         console.log("Something Went Wrong!!!");
//     }
//     else {
//         console.log("We have just added a new cat to the database", cat);
//     }
// });
// Retrieving data from database
// Cat.find({}, function (err, cats) {
//     if (err)
//         console.log("Something went wrong");
//     else
//         console.log("All the cats", cats);
// })
Cat.create({
    name: "Snow White",
    age: 15,
    temperament: nice
}, function (err, cat) {
    if (err)
        console.log(err);
    else
        console.log(cat);
});