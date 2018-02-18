console.log("starting notes.js file");
// "I will learn importing the other file inside of my project")

// explore built-in modules
// Module object will show up.
// console.log(module);

// "exports" object will be implemented.
// exporting this object in app.js => go there
// The properties in exports is not available now 
// Which means that we can add new property like below.
module.exports.age = 25;

// using anonymous function
module.exports.addNote = () => {
    
    console.log('addNote');
    return 'New Note';

};

/*
// adding 
module.exports.add = (a, b) => {

    return a + b;

}
*/

