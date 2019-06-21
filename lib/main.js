const Questions = require('./helpers/questions')
const Folders   = require('./helpers/folderGenerator');

const makeFolderStructure = () => {
  Questions.ask().then( (resp) => {
    Folders.generate(resp);
  } );
}

module.exports = { makeFolderStructure };