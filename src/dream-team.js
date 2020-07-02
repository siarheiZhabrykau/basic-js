const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(nameArr) {
  if(!Array.isArray(nameArr)){
    return false;
  }
  return nameArr.filter(name => (typeof name) === 'string').map(name => name.trim().charAt(0).toUpperCase()).sort().join('');
};
