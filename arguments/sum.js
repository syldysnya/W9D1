function sum(...nums) {
  let sum = 0;
  nums.forEach(function(ele){
    sum += ele;
  })
  return sum;
}

