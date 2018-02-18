/**
 * Built-in node module
 * just download the latest node at https://nodejs.org/en/
 * and done.
 * 
 * if it is not working please find the manual in 생활코딩 doc.
 * 
 */

console.log('starting app.js');

// File System module - It is a built-in moudule');

// using fs.appendFile
const fs = require('fs');

// using os.userInfo
// const os = require('os');

// importing the other file
// This runs in order.
// "console.log('starting app_1.js') first
// "console.log('starting notes_2.js)" second.
// Then the next one ==> appendFile
const notes = require('./notes_2.js');


// "_" is common convention.
const _ = require('lodash');



// fs.appendFile('greeting.txt', 'Hello Joon'); ==> deprecated!!!

// calling fs module. then use appendFile with paramters
// parameter 1: file name which will be created automatically
// parameter 2: adding data into the file.
// Eeverytime it runs app.js, parameter2 will be added into the file created.

/*
// option 1)
fs.appendFile('greetings.txt', 'Hello Joon', (err) => {

    if (err) 
    console.log ("unable to print out");

});
*/

// option 2) by usint Synch.
//fs.appendFileSync('greetings.txt', 'Hello Joon');


// userInfo of OS module.
// It returns the currently logged-in users or username
// var user = os.userInfo();
// console.log(user);


// Combo of both mudules above
// "username" is a property of "os.userInfo()""
/*
var copyUser = os.userInfo();
fs.appendFile('greetings1.txt', 'Hello, ' + copyUser.username, (err) => {
    if(err)
    console.log("unable to print out");
});
*/

// full ES6

// adding exports property in note_2.js by using object "notes" above

/*

// *****It is a way to call object ${notes.age}
var copyUser = os.userInfo();
fs.appendFile('greetings1.txt', `Hello, ${copyUser.username}: you are ${notes.age}`, (err) => {
    if(err)
    console.log("unable to print out");

});
*/

// call "function" addNote in a way of method.
// const res = notes.addNote();
// console.log(res);

// call a function with add
// console.log('Results:', notes.add(9, -2));


/**
 * Third Party module : npm
 * 
 * setup : 
 *     npm init
 * 
 * install new modules
 *     1) lodash : includes many functions
 *          
 *          npm install lodash --save
 *          npm install nodemon -g
 *          
 *          [fyi] --save : updates the module to "package.json" file and "node_modules"
 *                => it is accomapnied with application                
 *                => import required like const _ = require('lodash')
 * 
 *                Without --save or with -g: the module will not be updated to package.json and node_modules
 *                => Only whenever we use this module, it is updated from the outside of project I work on.
 *                => it is not limited to the scope of the specific project.
 * 
 * and Checking out:
 *    1. Package.json: description of npm, the third party modules.
 *          1) lodash
 *          2) ** nodemon => automate update to terminal like "supervisor"
 * 
 * 
 * 
 */

 /*
 // "_" is common convention.
 const _ = require('lodash');

 //_.isString() of lodash => checking up if the value is String
 console.log(_.isString(1));
 console.log(_.isString("joon"));

 //_.uniq => remove the duplicated value in an array
var filteredArray = _.uniq(['JOON', 11, "JOON", 1, 2, 3, 4])
console.log(filteredArray);
*/

