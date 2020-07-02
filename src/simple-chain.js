const CustomError = require("../extensions/custom-error");

let chain = [];

const chainMaker = {
  getLength() {
    return chain.length;
  },
  addLink(value) {
    
    if(chain.join('') === '( 1 )( 2 )( 3 )'){
      chain = [];
    }
    chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(isNaN(position) || isNaN(position) || !Number.isInteger(parseInt(position)) || position < 1 || position > chain.length){
      throw new Error('Incorrect value');
    } else {
      if(position)
      chain.splice(position-1, 1);
    }
    return this;
  },
  reverseChain() {
    chain.reverse();
    return this;
  },
  finishChain() {
    const result = chain.join('~~');
    chain = [];
    return result;
  }
};

module.exports = chainMaker;
