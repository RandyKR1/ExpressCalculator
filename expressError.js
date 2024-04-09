class ExpressError extends Error { // Error is a built in class, allowing us to create a custom error class
    constructor(message, status) {
        super(); // calls the constructor of the parent class, which in this case is the Error class. 
        this.message = message; // assigns the provided message parameter to the message property 
        this.status = status; // assigns the provided status parameter to the status property
        console.error(this.stack); // 'stack' contains a string representing the stack trace at the time the error was created. It includes information about the sequence of function calls that led to the error.
    }
  }
  
  
  module.exports = ExpressError;