console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


// "Please, split the built-in modules from the modules created.
const notes = require('./notes_6.1.js');

/**
 * [Yargs] same thing to review the arguments from the user.
 * It is the third party module, by the way.
 * 
 * Yargs helps you build interactive command line tools, 
 * by parsing arguments and generating an elegant user interface. 
 * It gives you
 * commands and (grouped) options (my-program.js serve --port=5000).
 * a dynamically generated help menu based on your arguments.
 * 
 * setup
 *      npm install yargs@4.7.1 --save // use this version
 *   
 *      and import like above
 * 
 * Difference from "process" object below.
 * 
 * 1. node app_3.js encrypted
 * yargs.argv:  { _: [ 'encrypted' ], '$0': 'app_3.js' }

  process.argv:  [ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\joona\\OneDrive\\node\\node_helloWorld\\notes-node\\app_3.js',
  'encrypted' ]
 * 
 * 2. node app_3.js add --title="secrets" (FYI: In Yargs,
 *    --title="secrets" is same --title "secrets"  )
 * yargs.argv:  { _: [ 'add' ], title: 'secrets', '$0': 'app_3.js' }
 * yargs.argv:  { _: [ 'add' ], title: 'secrets', '$0': 'app_3.js' }

   process.argv:  [ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\joona\\OneDrive\\node\\node_helloWorld\\notes-node\\app_3.js',
  'add',
  '--title=secrets' ]

   process.argv:  [ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\joona\\OneDrive\\node\\node_helloWorld\\notes-node\\app_3.js',
  'add',
  '--title',
  'secrets' ]
 * 
 */

 // argv is an property of yargs object.
 /*
const argv = yargs.argv;
console.log('yargs.argv: ', argv);


//1)
// Using "process" object
//const command = process.argv[2];

// Using "yargs" module, 
// "argv" is an property from "const argv = yargs.argv;" above
const command = argv._[0];



if (command === 'add') {

    //node app_3.js read --title="wired" --body="what the fuck am I doing?"
    const message = notes.addNote(argv.title, argv.body);

    console.log ('message from addNote: ', message);

    if (message) {

       notes.logNote(message);

    } else {

        console.log('Note title is already taken');
    }

    return console.log('Yargs, Adding a new note');

} else if (command === 'list') {
    
    // "getAll()" in "notes_6.1.js" returns all of the nodes in an array
    // 
    // const allNotes = notes.getAll();
    // console.log(`Printing ${allNotes.length} notes.`);
*/
    //ES5
    /*
    alllNotes.forEach( (note) => {
        
        // in notes_6.1
        notes.logNote(note);
    
    });

    */

    // es6
    // compared to "map" function, forEach ==> no return***
    // allNotes.forEach( (note) =>  notes.logNote(note));
    
    
    //console.log("NNN", note)
   // console.log("NNNNN", note[0].title)

   /*
    if (note) {

        notes.logNote(note);

    } else {

        console.log("That note is not available")
    }
    */

/*  

} else if (command === 'read' )  {

    // node app_3.js read --title="wired"
    // notes.readTitle(argv.title);
    notes.getNote(argv.title);
    return console.log('Yargs, reading title');

} else if (command === 'remove' )  {

    // node app_3.js remove --title="secret2" 

    // "removed" variable receives boolean types
    const removed = notes.removeBody(argv.title);

    // Ternary condition
    const message =  removed ? "Note was removed" : "Note was not found"
    console.log(message);

    return console.log('Yargs, remove body');

} else { 

    return console.log('Command not recognized.');

}
*/


/** 
 * The way of finding what arguments the user inputs
 * For instance, whe the user input "list" in command line
 * we can find the command by using "process"
 * 
 * More specifically, adding the argument like the user input "app_3.js list"
 * 
 * console.log(process.argv); // argv is an array of all command line arguments
 * ==> returns [0] = location of node, [1] = the current location 
 *             [2] = arguments
 * 
 * When the user inputs "node app_3.js remove --title="secrets""
 * 'remove',
 * '--title=secrets'
 * 
 * [FYI]When we input --title="secrets" or --title "secrets" in Window, we must use double quotes!!!!
 *  
 * When using --title="secrets"
 * [ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\joona\\OneDrive\\node\\node_helloWorld\\notes-node\\app_3.js',
  'remove',
  '--title=secrets' ]
   Removing notes


   When using --title "secrets"
   [ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\joona\\OneDrive\\node\\node_helloWorld\\notes-node\\app_3.js',
  'remove',
  '--title',
  'secrets' ]
   Removing notes

*/

/*
var command = process.argv[2];
console.log('command: ', command);
console.log('process.argv: ', process.argv);

if (command === 'add')
return console.log('Adding a new note');

else if (command === 'list')
return console.log('listing all notes');

else if (command === 'read')
return console.log('Reading notes');

else if (command === 'remove')
return console.log('Removing notes');

else
return console.log('Command not recognized.');
*/

// ------------------------------------------------------------------------------- (yargs final)

/**
 *  [ dive in yargs ]
 *  .command (command, description, [module])
 * 
 */

const titleOptions =  {
    describe: 'Titel of note',
    demand: true, // required
    alias: 't'
}

const bodyOptions = {
    describe: 'Body of note',
    demand: false, // not required
    alias: 'b' // it can be uses instead of --body=" "
}

const argv = yargs
    .command ('add', 'Add a note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command ('list', 'List all notes')
    .command ('read', 'Read a note', {

        title : titleOptions
    })
    .command ('remove', 'remove a note', {

        title:titleOptions
    })
    .help() // node app_3.js -- help
    .argv; //

console.log('yargs.argv: ', argv);

/**
 * [result]
 * 
 * 
 $ node app_3.js --help
starting app.js
starting notes_6.1js file
using app_3.js
Commands:
  add     Add a note
  list    List all notes
  read    Read a note
  remove  remove a note

Options:
  --help  Show help                                               [boolean]



 $ node app_3.js add
starting app.js
starting notes_6.1js file
using app_3.js
app_3.js add

Options:
  --help       Show help                                               [boolean]
  --title, -t  Titel of note                                          [required]
  --body, -b   Body of note

Missing required argument: title
 



$ node app_3.js add -t="fun" -b="what?"
yargs.argv:  { _: [ 'add' ],
  help: false,
  t: 'fun',
  title: 'fun',
  b: 'what?',
  body: 'what?',
  '$0': 'app_3.js' }
 * 
 * 
 * 
 * remove, read, list are all same as above!!!
 */


const command = argv._[0];

if (command === 'add') {

    //node app_3.js read --title="wired" --body="what the fuck am I doing?"
    const message = notes.addNote(argv.title, argv.body);

    console.log ('message from addNote: ', message);

    if (message) {

       notes.logNote(message);

    } else {

        console.log('Note title is already taken');
    }

    return console.log('Yargs, Adding a new note');

} else if (command === 'list') {
    
    // "getAll()" in "notes_6.1.js" returns all of the nodes in an array
    // 
    const allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes.`);

    allNotes.forEach( (note) =>  notes.logNote(note));
    

} else if (command === 'read' )  {

    
    notes.getANote(argv.title);
    return console.log('Yargs, reading title');

} else if (command === 'remove' )  {

    const removed = notes.removeBody(argv.title);

    // Ternary condition
    const message =  removed ? "Note was removed" : "Note was not found"
    console.log(message);

    return console.log('Yargs, remove body');

} else { 

    return console.log('Command not recognized.');

}


