// retorna o tamanho de uma string
const textSize = 'Texto'.length
console.log('Quantidade de letras: ' + textSize)

// retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x')
console.log('\nArray com as posições separadas pelo delimitador: ' + splittedText)

// busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT')
console.log('\nSubstituição de valor: ' + replacedText)