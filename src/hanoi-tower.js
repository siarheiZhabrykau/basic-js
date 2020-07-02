const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const numberOfTurns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor(numberOfTurns * (3600 / turnsSpeed));
  return {
    "turns": numberOfTurns,
    "seconds": seconds
  }
};
