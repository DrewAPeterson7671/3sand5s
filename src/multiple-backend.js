export let multipleCheck = function (input) {
  let number = 5;
  let total = 0;
  if(typeof(input) !== typeof(number)){
    return false;
  }
    let numArr = [];
    for (let i = 0; i <= input; i++){
      if(i % 3 === 0){
        numArr.push(i);
      } else if (i % 5 === 0){
        numArr.push(i);
      }
    }
    total = numArr.reduce((a, b) => a + b, 0);
    return total;
}
