/**
 * Debugging setup from nojs
 * 
 * 1) In terminal, type: 
 * 
 * node inspect playground/debugging_7.js
 * 
 * 2) In debugger mode, type:
 * 
 * list(21) // 21 means the the next line of the last code that covers all codes
 * 
 * Result: 
 * (function ~~~~) { node codes are inside of this curly bracket that is called "wrapper function"}
 * "require, exports, module" we used right? They are in this wrapper function so that we can use them.
 *  
 * (function (exports, require, module, __filename, __dirname) { const person = {
  2     name: 'joon'
  3  };
  4
  5  person.name = 'eunmi';
  6
  7  person.age = 25;
  8
  9  console.log(person);

 * 3) In debugger mode, type:
 * 
 *    n // just "n" which means "next"
 *      // It gets us to move to very next statement.
 *      // So it notifies the step by step the code runs or flows
 *    
 * 4) In debugger mode, type:
 * 
 *    c // which means "continue"
 *      // all codes run and get back to us the result. 
 * 
 * 5)  In debugger mode, type:
 * 
 *    repl // inside of debugger
 *         // which means "read, evaluate, prinloop"
 *         // it can be used with "n" to have results line by line  
 *         // also,
 *          > person.age
              25
            > person.name
             'eunmi'
            >

 */

 /**
  * Also, we use "dubugger;" : actually, it is the most useful!!!
  * I know debugger.
  * 
  * 1) debugger; // in the code
  * 2) debugging mode in the terminal
  * 3) c // it stops at debugger; in the code
  * 4) repl // we find the status prior to "debugger."
  * 
  * 
  * for instance
  * 
  * node inspect app_3.js list --title=secret2
  * c
  * rpel
  * "note"
  * 
  * 
  */

  /**
   * 
   * "nodemand" // it is same as above...but it is automatic
   * more useful.
   * 
   * nodemon inspect app_3.js list --title=secret2
   * 
   */


const person = {
    name: 'joon'
 };

 person.name = 'eunmi';


debugger;

 person.age = 25;

 console.log(person);





