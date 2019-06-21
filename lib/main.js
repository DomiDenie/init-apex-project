const Questions = require('./helpers/questions')
const makeFolderStructure = () => {
  const response = Questions.ask();
}

module.exports = { makeFolderStructure };