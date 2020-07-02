const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(isDirect){
    if(isDirect === undefined){
      this.isDirect = true;
    } else {
      this.isDirect = isDirect;
    }
  }

  encrypt(messageToEncrypt, keyword) {
    if(messageToEncrypt === undefined || keyword === undefined){
      throw new Error('One of parameters is undefined')
    }

    const encryptedMessageCharCodes = messageToEncrypt.split('').map(charValue => charValue.toUpperCase().charCodeAt(0));
    const keywordCharCodes = keyword.split('').map(charValue => charValue.toUpperCase().charCodeAt(0)).filter(charCode => charCode >= 65 && charCode <= 90);

    let resultCodes = encryptedMessageCharCodes.map(charCode => {
                                                                  if(charCode >= 65 && charCode <= 90){
                                                                    let firstElem = keywordCharCodes.shift();
                                                                    keywordCharCodes.push(firstElem);
                                                                    const charIntermedValue = charCode + firstElem - 130;
                                                                    return charIntermedValue > 25 ? 65 + (charIntermedValue%26) : 65 + charIntermedValue;
                                                                  } else {
                                                                    return charCode;
                                                                  }
                                                                });

    let encryptedArr = resultCodes.map(charCode => String.fromCharCode(charCode));
                              
    if(this.isDirect){
      return encryptedArr.join('');
    } else {
      return encryptedArr.reverse().join('');
    }

  }    
  decrypt(encryptedMessage, keyword) {
    if(encryptedMessage === undefined || keyword === undefined){
      throw new Error('One of parameters is undefined')
    }

    const encryptedMessageCharCodes = encryptedMessage.split('').map(charValue => charValue.toUpperCase().charCodeAt(0));
    const keywordCharCodes = keyword.split('').map(charValue => charValue.toUpperCase().charCodeAt(0)).filter(charCode => charCode >= 65 && charCode <= 90);

    let resultCodes = encryptedMessageCharCodes.map(charCode => {
                                                                  if(charCode >= 65 && charCode <= 90){
                                                                    let firstElem = keywordCharCodes.shift();
                                                                    keywordCharCodes.push(firstElem);
                                                                    const charIntermedValue = charCode - firstElem;
                                                                    return charIntermedValue >= 0 ? 65 + charIntermedValue : 90 + charIntermedValue + 1;
                                                                  } else {
                                                                    return charCode;
                                                                  }
                                                                });

    let encryptedArr = resultCodes.map(charCode => String.fromCharCode(charCode));

    if(this.isDirect){
      return encryptedArr.join('');
    } else {
      return encryptedArr.reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;
