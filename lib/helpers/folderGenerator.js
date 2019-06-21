const structureGenerator = require('folder-structure-generator');

const folderStructure = require('../structures/folderStructure.json');
const schemaStructureDefault = require('../structures/schemaStructure.json');

const generate = ( projectInfo ) => {
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
  })

  structureGenerator(wholeJSON);
};

module.exports = { generate };