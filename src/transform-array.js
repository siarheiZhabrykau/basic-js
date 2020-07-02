const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let output = [];
  if(!Array.isArray(arr)){
    throw new Error('Not an array');
  }

  if(arr.lenght === 0){
    return output;
  }


  for(let i=0; i<arr.length; i++){
    if(arr[i] === '--discard-next'){
      if(i+1 < arr.length){
        if(i+2 < arr.length && (arr[i+2] == '--discard-prev' || arr[i+2] == '--double-prev')){
          i +=2;
          continue;
        }
        i++;
        continue;
      }
    } else if(arr[i] === '--discard-prev'){
      if(output.length !== 0){
        output.pop();
      }
    } else if(arr[i] === '--double-next'){
      if(i+1 < arr.length){
        output.push(arr[i+1]);
      }
    } else if(arr[i] === '--double-prev'){
      if(output.length !== 0){
        output.push(output[output.length-1]);
      }
    } else {
        output.push(arr[i]);
    }
  }

  return output;
}