//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      to bind the function to an object

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      this is bound to the scope it is called on
      

  // 3) What is the difference between call and apply?

      //Answer
      they both allow us to borrow functions and set the this keyword to an object. Apply can make it so the function
      executes an array of arguments indiviually.
  // 4) What does .bind do?

      //Answer
      bind steals a function and applies it to the object where the new function is being invoked.

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
  var user = {
    username: "ta11ey",
    email: "jacob.talley@hotmail.com",
    getUsername: function(){
      return this.username;
    }
  }
  
  
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();
//Next Problem


// Write the function definitions which will make the following function invocations function properly.
 //Function Invocations Here
  function Car (make, model, year, move) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.move = move;
    
  }
  
  
var moveCar = function() {
  this.move = this.move + 10;
  console.log(this.move);
}

Car.prototype.moveCar = moveCar;

var prius = new Car('Toyota', 'Prius', 2011, 12);
var mustang = new Car('Ford', 'Mustang', 2013, 8);



prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. 
//You'll also need to use the 'this' keyword properly in order to make sure you're 
//invoking moveCar on the write object (prius vs mustang).


//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here

Car.prototype.getYear = getYear;



//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(this.getUsername.bind(user), 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //Answer Here
  
  undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  
    the window's username
//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
  setTimeout(this.getUsername.bind(user), 5000);
