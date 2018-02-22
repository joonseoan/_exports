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
 *      // all codes run and get back to us with the result. 
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
  *    //[fyi] : this is not for debugging_7.js. It is for app_3.js and its child notes_6.1.js
  * 1) debugger; // in the code
  * 2) debugging mode in the terminal
  *    In terminal, type: 
  *    node inspect app_3.js add --type="buying" --body="buy something"
  *    c //it stops at debugger; in the code
  *    repl //we find the status prior to "debugger."
  *    note // execute somethng like this
  * 
  * 
  */

  /**
   * 
   * Setup: 
   *   npm i -g nodemon@latest  
   *  
   * 
   * "nodemon" // it is same as above...but it is automatic
   * more useful.
   * 
   * //[fyi] : this is not for debugging_7.js. It is for app_3.js and its child notes_6.1.js
   * nodemon inspect app_3.js list --title=secret2
   * 
   */


   /**
    * 1)
   * In terminal, type: 
   * node --inspect-brk playground/debugging_7.js
   * 
   * Then, in chrome browser, type:
   * chrome://inspect
   * 
   * Then, click "Open dedicated ~~~"" 
   *
   * 2) 
   * In terminal, type: 
   * nodemon --inspect-brk playground/debugging_7.js
   * 
   * Then, in chrome browser, type:
   * chrome://inspect
   * 
   * Then, click "Open dedicated ~~~"" 
   */


const person = {
    name: 'joon'
 };

 person.name = 'eunmi';


debugger;

 person.age = 25;

 console.log(person);





