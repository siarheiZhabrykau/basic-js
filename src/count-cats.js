const CustomError = require("../extensions/custom-error");

module.exports = function countCats(hiddenCats) {
  let catsCounter = 0;
  if(hiddenCats.length === 0){
    return catsCounter;
  }
  hiddenCats.map(innerArr => innerArr.filter(element => element === '^^').forEach(element => catsCounter++));
  
  return catsCounter;
};
