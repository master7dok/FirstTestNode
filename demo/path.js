const path = require('path')

console.log('nazwa dokumenta: ', path.basename(__filename))
console.log('nazwa directory: ', path.basename(__dirname))
console.log('rozszezenie dokumentu: ', path.extname(__filename))

console.log('Parse: ', path.parse(__filename).name)
console.log( path.join(__dirname , 'server', 'index.html'))
