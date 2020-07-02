const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    let counter = 0;
    let arrIntermed = [];

    if (Array.isArray(arr)) {
      ++counter;
      if (arr.length === 0) {
        return counter;
      }
      counter = arr.map(innerArrElem => { counter = this.calculateDepth(innerArrElem); return ++counter; }).reduce((accum, currValue) => accum >= currValue ? accum : currValue);
    } else {
      return counter;
    }

    return counter;
  }


};
