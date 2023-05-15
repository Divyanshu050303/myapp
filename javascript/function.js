// Normal funcion 
function normal(name) {
     console.log(name);
}
normal("Divyanshu")

//Arrow functions
const ArrowFunction=(name)=>{
    console.log(name);
}
ArrowFunction("Divyanshu")

// If we have one argument in the arrow function then we rempmove the pranthises 

const ArrowFunction1=name=>{
    console.log(name);
}
ArrowFunction1("Singh")

// return statement with arrow function
export const multiply=(number)=>{
    return number*3;
}
console.log(multiply(4));

// if we have only one line to return then we use 
const add=(number1, number2)=> number1+number2;
console.log(add(4,6));
    

export const time=10
 