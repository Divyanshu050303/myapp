// default import 
import name from './function.js';

// named import 
import {time} from './function.js'
import {multiply as Mul} from './function.js' // here we use alias 
 import * as all from './function' // here we use alias ans import all the things form the function and we use all.name of the property


// console.log(time)
console.log(multiply(time))
