/*

var square = (x) => {

    var result = x * x;
    return result;

};

*/

// express syntax

// var square = (x) => x * x; // ok

// When we have a single argument, we can remove () brackets.
var square = x => x * x;
console.log(square(9));

// [FYI] : allNotes.forEach( (note) =>  notes.logNote(note)); // it does not return value.
// Because forEach does not have "return"

var user = {

        name : 'joon',
        /** arrow function
         * 
         *  issues
         *  (1) it does not bind the keyword
         *  Therefore, "this" in "sayHi" is a global keyword.
         * 
         *  (2) it can not have additional arguments
         * 
         */
        sayHi: () => {
            console.log('global object arguments: ', arguments)
            console.log('this: ', typeof this, this)
            console.log(`Hi, lovely ${this.name}`);
        },
        sayAll () {
            console.log('"user" object arguments: ', arguments)
            console.log('thisFunction:', typeof this, this)
            console.log(`Hi, lively ${this.name}`);
        }
};

// a way of invoking a property function
user.sayHi();
user.sayAll();

// adding arguments
user.sayHi(1,2,3);
user.sayAll(1,2,3); //"user" object arguments:  { '0': 1, '1': 2, '2': 3 }


