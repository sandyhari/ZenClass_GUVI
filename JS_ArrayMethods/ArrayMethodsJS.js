// Filter Function -- Example
var array = [12, 5, 8, 130, 44]
console.log("Referenced array in the below all methods :",array);
console.log("----------");
console.log("--------------");
let filtered = array.filter(function(val){
  return val % 2 == 0
})
console.log("gives only even numbers using filter method ", filtered)

//Map Function -- Example  --

const mapped = array.map(function(val){
  return val**2
})
console.log("gives power of numbers using Map method ", mapped);

//Reduce Function -- Example

const reducer = array.reduce(function(accum,current){
  return accum*current
})
console.log("gives multiplication of all numbers using Reduce method ", reducer);

// Find function -- Example

function isThere(val){
  return val > 5
}
console.log("Checks whether 5 is there in array using find method "+ array.find(isThere));

//Flat method -- Example (nested arrays are converted to single array)

const arr2 = ['cghe','hari','raj',[1,2,3]]
console.log("Flattens the array to single array ",arr2.flat());

console.log([[1,2,3],[4,5,[6]]].flat(2)) // or pass infinity to flatten infinte nums of arrays

//forEach method -- Example (NOTE:cant terminate the loop)
const foreacher = array.forEach(function(val){
  return console.log("foreach value : ",val+2)
})

//Every method -- Example (returns bool value)
console.log("True if all elements in array are below 1000 : "+ array.every(function(val){
  return val < 1000
}));

//Slice Function -- Example (returns sliced value from passed array)
console.log("from the array list :"+array+" we sliced first two elements :"+array.slice(2))
console.log("if -ve value is passed as second arg it will return manipulating from last position :"+array.slice(2,-2))
