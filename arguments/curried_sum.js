function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

function curriedSum(num1) {
  return function addSumTwo(num2) {
    return function addSumThree(num3) {
      return num1 + num2 + num3;
    }
  }
}

Function.prototype.curry = function(limit) {
  let nums = [];
  let that = this.call(this);
  // debugger
  return function sumArr(num){
    nums.push(num);
    // debugger
    if (nums.length === limit) {
      that(...nums);
    } else {
      return sumArr;
    }
  }
}

// sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
sumThree.curry(3)(4)(20)(6); // == 30


// const sum = curriedSum(4);
// sum(5)(30)(20)(1); // => 56