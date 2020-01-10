const Questions = require('./helpers/questions')
const Folders   = require('./helpers/folderGenerator');
const Git       = require('./helpers/gitInit');

const makeFolderStructure = async () => {
  const response = await Questions.ask();

  if( response._canceled_) {
    console.log('Program exited');
  } else {
    Folders.generate(response).then(() => {
      if ( response.git ) {
        Git.Init(response.project, response.remote);
      }
    });
  }

}

module.exports = { makeFolderStructure };