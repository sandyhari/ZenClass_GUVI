
pival = Math.PI;
console.log("Gives pi Value :",pival);
console.log("Gives pi Value rounded to 2 digits :",Math.round(pival));
console.log("Gives square root of pi Value :",Math.sqrt(pival));
console.log("Gives floor value of pi Value :",Math.floor(pival));
console.log("Gives ceil value of pi Value :",Math.ceil(pival));
pival = -pival
console.log('Gives Absolute value of -ve pival',Math.abs(pival));
console.log('MinVal of the list :',Math.min(0, 150, 30, 20, -8, -200));
console.log('MaxVal of the list :',Math.max(0, 150, 30, 20, -8, -200));
function rand(val){
  return "Returns random number in the range of 1 to 100 : "+ Math.round(val*100);
}
console.log(rand(Math.random()));
