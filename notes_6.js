console.log("starting notes_6.js file");
console.log("using app_3.js")

const fs = require('fs');

const addNote = (title, body) => {
    
   
   var note = {

        title,
        body

   };

   console.log('note: ', note);

   var notes = [];
  

   try {

        //[FYI] No Data is availble in JSON, An error will occur.
        // In order to prevent this, we need to use try ~ catch

        var noteString = fs.readFileSync('notes-data.json');

        //JSON.parse(noteString) //returns an array. So "notes" here copy the array.
        notes = JSON.parse(noteString);

        //---------------------It reades the existing objects in the file before push new elements in the array.

         } catch (e) {
            
            // *****The difference is that try~ catch does not make stop at the "catch" part. 
            // even if there is an error 
            console.log('something wrong');

         }

         // filter is a method to find the elements in the condition of return of callback.
         // 
         // The existing "note" which is an argument below that compares the the new property "title" 
         // if it is "true", no same element exists and then the array will enclose it
         // otherwise, the new element will dump out. ***** 
         /*
         1)
         var duplicateNotes = notes.filter((note) => {

                console.log('note_title: ', note.title);
                console.log("title: ", title);

                return note.title === title;

         }); */

         // 2)
         // ES6
         var duplicateNotes = notes.filter( (note) => note.title === title); 

         console.log('duplicateNotes:    ', duplicateNotes)

         if (duplicateNotes.length === 0)
         {
            console.log('duplicate  ', duplicateNotes);

            notes.push(note);
    
            fs.writeFileSync('notes-data.json', JSON.stringify(notes));
      
            console.log('array:', notes);
         }

        



};
   

   
   

   



var getAll = () => {

    console.log('getting all notes');

};

var readTitle = (title) => {

    console.log('readTitle ', title);

}

var removeBody = (body) => {

    console.log('removeBody ', body)

}

var getNote = (title) => {

    console.log('getNote', title);
};

module.exports = {

    //addNote : addNote
    addNote,
    getAll,
    readTitle,
    removeBody,
    getNote

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
