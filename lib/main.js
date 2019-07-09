const Questions = require('./helpers/questions')
const Folders   = require('./helpers/folderGenerator');
const Git       = require('./helpers/gitInit');

const makeFolderStructure = () => {
  Questions.ask().then( (resp) => {
    Folders.generate(resp);
    Git.Init(resp.project);
  } );
}

module.exports = { makeFolderStructure };