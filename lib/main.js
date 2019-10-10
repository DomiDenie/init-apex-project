const Questions = require('./helpers/questions')
const Folders   = require('./helpers/folderGenerator');
const Git       = require('./helpers/gitInit');

const makeFolderStructure = async () => {
  const response = await Questions.ask();
  Folders.generate(response).then(() => {
    if ( response.git ) {
      Git.Init(response.project, response.remote);
    }
  });

}

module.exports = { makeFolderStructure };