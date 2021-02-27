module.exports = function check(str, bracketsConfig) {
  let arrBrackets = typeof(str) === 'string'? str.split('') :str;
  let isFoundAnyPair = 0;

  for (let i = 0; i < arrBrackets.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      let pairs = bracketsConfig[j];
      if ((pairs[0] === arrBrackets[i] && pairs[1] === arrBrackets[i + 1])) {
        arrBrackets[i] = null;
        arrBrackets[i + 1] = null;
        isFoundAnyPair = 1;
      }
      arrBrackets = arrBrackets.filter((item) => item !== null)
    }
  }
  if (isFoundAnyPair) return check(arrBrackets, bracketsConfig); // пока находит пары -рекурсия
  else return !arrBrackets.length// массив пустой- все скобки закрыты , не пустой- не все
}
