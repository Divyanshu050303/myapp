//spread operator used for spliting up the array elment and object properties

const oldarray =[1,2,3,4,5,6,7,8,9]
const newArray = [...oldarray,1,2];
console.log(oldarray)
console.log(newArray)
//rest operator used for merging the list of function arguments into an array

const filter=(...args) =>{
    return args.filter((e)=> e==1 || e==2);
}
console.log(filter(1,2,3,4))