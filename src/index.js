module.exports = function check(str, bracketsConfig) {
  module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0)  return false;
    let input = str.split('');
    let brackets = {};
    let stack = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    brackets[bracketsConfig[i][0]] = bracketsConfig[i][1];    
  }  
  
  for (let j = 0; j < input.length; j++) {  
    if (brackets[stack[stack.length - 1]] === input[j])  {
      stack.pop();        
    } else { 
      stack.push(input[j]);
    }       
  }

        return stack.length === 0;
    }
}
