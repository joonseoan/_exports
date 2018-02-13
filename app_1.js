console.log('starting app.js');

// File System module - It is a built-in moudule');

// using fs.appendFile
const fs = require('fs');

// using os.userInfo
const os = require('os');

// importing the other file
// This runs in order.
// "console.log('starting app_1.js') first
// "console.log('starting notes_2.js)" second.
// Then the next one ==> appendFile
const notes = require('./notes_2.js');



// fs.appendFile('greeting.txt', 'Hello Joon'); ==> deprecated!!!

// calling fs module. then use appendFile with paramters
//  parameter 1: file name which will be created automatically
//  parameter 2: adding data into the file.
// Eeverytime it runs app.js, parameter2 will be added into the file created.
// option 1)
/*
fs.appendFile('greetings.txt', 'Hello Joon', (err) => {

    if (err) 
    console.log ("unable to print out");

});
*/

// option 2) by usint Synch.
//fs.appendFileSync('greetings.txt', 'Hello Joon');



// using userInfo of OS module.
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
fs.appendFile('greetings1.txt', `Hello,${copyUser.username}: you are ${notes.age}`, (err) => {
    if(err)
    console.log("unable to print out");

});
*/

// call "function" addNote in a way of method.
// const res = notes.addNote();
// console.log(res);

// call a function with add
console.log('Results:', notes.add(9, -2));



