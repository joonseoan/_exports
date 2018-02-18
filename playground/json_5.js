
/**
 * [Parsing JSON]
 * json has a information of nodes impored.
 * 
 * JSON stores data in String like " " : " " (except for number)
 * , converts them into object
 * , and get this back to string again.
 * ==> It is a way of node inside.
 * 
 * 
 */


var obj = {

    name : 'Jason'

};

// Let's take an advantage of "obj"
// like sending "obj" to text file or a certain server.

// It returns stringify version?
var stringObj = JSON.stringify(obj);

// checking up value type
console.log('stringObj Type: ',typeof stringObj);

// can see json type's property and value with " "
console.log('stringObj value: ', stringObj);

// not possible to get value from "personString.name"
var personString = '{"name" : "JSON", "Age" : 25}';

console.log("----------------------------")

var person = JSON.parse(personString);
console.log('person type: ', typeof person);
console.log ('person value: ', person);

// ceates JSON file, converts objects and vice versa


const fs = require('fs');


// my ownpractice

var orinalNote = {

    title: 'some title',
    body: 'some body'

};

// it can use writeFileSync or appendFileSunc: The syntax of two are same.
// However, appendFileSync should not be used more than once 
//  because it will mess up the json format in the file.

// [FYI] : ansyncronous module must not be used at the moment 
//  we need to execute readFileSync or readFile at the next step. If we do like that, it is still in buffer.
fs.writeFileSync('packagefile.json', json = JSON.stringify(orinalNote), (err) => {

    if(err)
    console.log("unable to print out");

    console.log('This is original JSON data: ', json);

});

var noteString = fs.readFileSync( 'packagefile.json' );
console.log ('noteSTRING', JSON.parse(noteString));

var note = JSON.parse(noteString);
console.log('type of note: ', typeof note)
console.log('title value: ', note.title);



/*
var orinalNote = {

    title: 'some title',
    body: 'some body'

};
*/




