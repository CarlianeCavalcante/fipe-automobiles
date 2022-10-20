function maskify(string) {
  if (string.length > 4) return string.slice(-4).padStart(string.length, '#')
  return string
}

module.exports = maskify

console.log(maskify('4556364607935616'))
console.log(maskify('64607935616'))
console.log(maskify('1'))
console.log(maskify('Skippy'))
console.log(maskify('Nanananananananananana Batman!'))

// padStart -> preenche a string original com um determinado caractere, ou conjunto de caracteres, (várias vezes, se necessário) até que a string resultante atinja o comprimento fornecido. O preenchimento é aplicado antes do primeiro caractere da string original. A string original não é modificada.
