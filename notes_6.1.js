console.log("starting notes_6.1js file");
console.log("using app_3.js")

const fs = require('fs');



const fetchNotes = () => {

    try {

        const noteString = fs.readFileSync ('notes-data.json');
        return JSON.parse(noteString);

    } catch (e) {

        return [];

    }

};

const saveNotes = (notes) => {

    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

}


const addNote = (title, body) => {
    
   const notes = fetchNotes();
   console.log("notes after fetch", notes);

   const note = {

        title,
        body

   };

   var duplicateNotes = notes.filter( (note) => note.title === title); 

   if (duplicateNotes.length === 0)
   {
            console.log('duplicate  ', duplicateNotes);

            notes.push(note)
            saveNotes(notes);

            // just remind if the condition is fulfilled,
            // it delivers "undefined".That means "notes" is not available
            return notes[notes.length -1];
    
            //fs.writeFileSync('notes-data.json', JSON.stringify(notes));
      
            console.log('array:', notes);
    }

};
   
var getANote = (title) => {

    const notes = fetchNotes();
    const aNote = notes.filter(note => note.title === title);

    return aNote[0];
    

};

var readTitle = (title) => {

    console.log('readTitle ', title);

}

var removeBody = (title) => {

    const notes = fetchNotes();
    const removeElement = notes.filter(note => note.title !== title );
    saveNotes(removeElement);
    //filter notes, remove the the title of arguments
    // save new removed array

    // It is a way to return "true" or "false"
    return notes.length !== removeElement;
    
}

// To remove duplicated codes
const logNote = (note) => {
    
    // debugging line
    debugger;
    
    console.log("A note found is......")
    console.log(`title: ${note.title}`);
    console.log(`body: ${note.body}`);

}


module.exports = {

    //addNote : addNote
    addNote,
    getANote,
    readTitle,
    removeBody,
    logNote

}

/*
function addNote1(title, body)  {

    console.log('adding note ', title, body);

};

module.exports = {
    
    // addNote : addNote : = ES5
    addNote // ES6

};
*/

/*
module.exports.addNote = (title, body) => {
    
    console.log('adding note ', title, body);
    // addNote : addNote : = ES5
    // addNote // ES6

};
*/
