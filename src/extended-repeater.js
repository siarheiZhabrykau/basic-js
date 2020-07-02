const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  str = new String(str);

  if(options !== undefined && (typeof options) === 'object'){
    let resultAddition = '';

    if(options.addition !== undefined){
      const additionValue = new String(options.addition);

      if(options.additionRepeatTimes === undefined){
        options.additionRepeatTimes = 1;
      }

      if(Number.isInteger(options.additionRepeatTimes) && options.additionRepeatTimes >= 0){
        let addionArr = [];
        for(let i=0; i<options.additionRepeatTimes; i++){
          addionArr.push(additionValue);
        }
        
        if(options.additionSeparator !== undefined && (typeof options.additionSeparator) === 'string'){
          resultAddition = addionArr.join(options.additionSeparator);
        } else {
          let additionSeparatorValue = '+';
          resultAddition = addionArr.join(additionSeparatorValue);
        }
      }  
    }

    str = str + resultAddition;


    if(options.repeatTimes !== undefined && Number.isInteger(options.repeatTimes) && options.repeatTimes >= 0){
      let repeatOutputStr = [];
      for(let i=0; i<options.repeatTimes; i++){
        repeatOutputStr.push(str);
      }

      if(options.separator !== undefined && (typeof options.separator) === 'string'){
        str = repeatOutputStr.join(options.separator);
      } else {
        let separatorValue = '+';
        str = repeatOutputStr.join(separatorValue);

      }
    }
    
  }

  return str;
};
  