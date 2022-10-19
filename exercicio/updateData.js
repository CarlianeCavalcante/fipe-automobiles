function updateData(currentObject, newDataObject) {}

module.exports = updateData

console.log(
  updateData({ name: 'Marcos', country: 'Brasil', age: 22 }, { price: 89.9, amount: 15, description: 'camiseta 100% algodão' })
)
console.log(
  updateData({ name: 'Marcos', country: 'Brasil', age: 22 }, { price: 89.9, amount: 15, description: 'camiseta 100% algodão' })
)
console.log(updateData({ name: 'Rafael', country: 'Chile', age: 42 }, { name: 'Camiseta Polo', price: 59.9, amount: 30 }))
