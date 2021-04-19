// function sum(...nums) {
//   let sum = 0;
//   nums.forEach(function(ele){
//     sum += ele;
//   })
//   return sum;
// }

function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
