const Questions = require('./helpers/questions')
const Folders   = require('./helpers/folderGenerator');
const Git       = require('./helpers/gitInit');

const makeFolderStructure = async () => {
  const response = await Questions.ask();
  Folders.generate(response).then(() => {
    Git.Init(response.project);
  });

}

module.exports = { makeFolderStructure };