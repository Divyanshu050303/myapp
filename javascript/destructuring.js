//easily extracting array elements and object porperties and storing them in the variables

// old method is 

const arr=[1,2,3,4]
// const first=arr[0]
// const second=arr[1]
// const third=arr[2]
// const fourth=arr[3]

// but now we use destructuring 

[first, second, third, fourth]=arr
console.log(first,second,third,fourth)