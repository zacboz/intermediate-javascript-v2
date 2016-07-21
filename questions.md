# Given the following function 
```
function grandpa(){
    var playball = "homerun";

    function dad(){
        var playball = "touchdown";
        
        function son(){
            var playnintendo = "Mario";
        }   
    }
    
    function uncle(){        
        var badjoke = "Har";
        
        function cousin(){
            
        }
    }
}
```

Remove entries from the array until only correct answers remain

These function(s) access the playball variable and get homerun
var scopeArray1 = ["grandpa", "dad", "son", "uncle", "cousin"];

These function(s) access the playball variable and get touchdown
var scopeArray2 = ["grandpa", "dad", "son", "uncle", "cousin"];

These function(s) access the badjoke variable and get undefined
var scopeArray3 = ["grandpa", "dad", "son", "uncle", "cousin"];

These functions accesss the badjoke variable and get "Har"
var scopeArray4 = ["grandpa", "dad", "son", "uncle", "cousin"];

These functions access the playnintendo variable and get Mario
var scopeArray5 = ["grandpa", "dad", "son", "uncle", "cousin"];




Promises
BRETT

Context 
# Context 1 
Write a function that takes in 4 parameters: A function called myFn, an object called context, param1, and param2.
Invoke myFn explicitly setting the context to the object called context.  Pass in param1 and param2 in order as well.

# Context 2
Write a function that takes in 3 parameters: A function called myFn, an object called context, and an array called params
Invoke myFn explicitly setting the context to the object called context.  Pass in params

# Context 3
Write a function that takes in 2 parameters: A function called myFn, and an object called context
Make sure the function is permanently linked to the context.  This should give you a new function, return it.


Call - Take in 1 function, an object that is the context and 3 params and invoke the function with the context and the parameters
Apply -  Take in 1 function, an object, and array of parameters and invoke the function with the context and the parameters
Bind - Take in 1 function and an object and return a new function that can be invoked as much as we want with the object as the context function


Constructor Function
Make a constructor function


Implicit binding
Make a constructor function with a method that Zs


Prototype
Add function to array that doubles the value of every item in the array
Given this constructor function make the X do Y via prototype


Closure
Title + name func
Add Player


Type checking
write a function - params
Same type and value
Different type and same value
Different value