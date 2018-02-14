console.log("starting notes.js file");

const addNote = (title, body) => {
    
    console.log('addNote ', title, body);
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

module.exports = {

    //addNote : addNote
    addNote,
    getAll,
    readTitle,
    removeBody

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
