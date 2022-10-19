function checkIfTheFirstLetterIsUppercase(word) {
  const firstLetter = word.substring(0, 1)
  if (firstLetter == firstLetter.toUpperCase()) return true
  return false
}

module.exports = checkIfTheFirstLetterIsUppercase

console.log(checkIfTheFirstLetterIsUppercase('Brasil'))
console.log(checkIfTheFirstLetterIsUppercase('mobiauto'))
console.log(checkIfTheFirstLetterIsUppercase('xXx xXx'))
console.log(checkIfTheFirstLetterIsUppercase('xDD'))
console.log(checkIfTheFirstLetterIsUppercase('Deu Certo!'))

// substring -> retorna a parte da string entre os índices inicial e final, ou até o final da string.
