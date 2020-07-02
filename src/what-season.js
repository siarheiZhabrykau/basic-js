const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date === undefined){
    return 'Unable to determine the time of year!';
  }

  if(date === null){
    throw new Error('NA');
  }

  const month = date.getMonth();
  try{
    date.getTime();
  } catch(err){
    throw new Error('NA');
  }

  if(month <2 || month === 11) {
    return 'winter';
  } else if(month <= 4) {
    return 'spring';
  } else if(month <= 7) {
    return 'summer';
  } else {
    return 'autumn';
  }
};
