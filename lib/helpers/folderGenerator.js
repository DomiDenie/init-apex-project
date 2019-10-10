const structureGenerator = require('./structureGenerator');

const folderStructure = require('../structures/folderStructure.json');
const schemaStructureDefault = require('../structures/schemaStructure.json');

const generateFolders = async ( json ) => {
    const rtrnMsg = "test";
    const retVal = await structureGenerator.generateStructure(json);

  return retVal;
}

const generate = async ( projectInfo ) => {
  
  const json = await getWholeJson(projectInfo);

  const ret = await generateFolders( json );  

  return ret;
};


const getWholeJson = async (projectInfo) => {
  const jsonPromise = new Promise( ( res, rej) => {
    const wholeJSON = {
      structure: [
        {
          name: projectInfo.project
        , children : folderStructure
        }
      ]
    };
  
    const sourceIndex = wholeJSON.structure[0].children.findIndex( element => element.name === "source");
    const databaseIndex = wholeJSON.structure[0].children[sourceIndex].children.findIndex( element => element.name === "database");
  
    projectInfo.schemas.forEach( schema => {
      const schemaStructure = { name : schema,
                                children: schemaStructureDefault };
  
  
      wholeJSON.structure[0].children[sourceIndex].children[databaseIndex].children.push(schemaStructure);
    });

    res(wholeJSON);
  });

  return jsonPromise;
}
module.exports = { generate };