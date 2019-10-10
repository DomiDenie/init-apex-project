const fs = require('fs');
const mkdirp = require('mkdirp-sync');

const generateStructure = async ( json ) => {
  const resp = await folderGenerator( json.structure, '' );
  

  return resp;
}

const folderGenerator = async( json, path ) => {
  const promise = new Promise( (resolve, reject) => {
    json.forEach( async (structure) => {
      const folderPath = `${path}${structure.name}`;
      try {
        const nrChildren = structure.children.length;
      } catch (error) {
        fs.writeFileSync( folderPath, '', (errorWritingFile) => {
          if(errorWritingFile) {
            console.log(errorWritingFile);
          } else {
            console.log(`+ ${folderPath}`);
          }
        });
        // continue with next element
        return;
      }

      const folderCreated = await makeFolder( folderPath );

      if( structure.children.length > 0 ) {
        return folderGenerator( structure.children, `${folderPath}/`);
      }
    });

    resolve('All folders created');
  });

  return promise;
}

const makeFolder = ( folderPath ) => {
  const promise = new Promise( ( resolve, reject ) => {
    mkdirp( folderPath);
    console.log(`+ ${folderPath}`);

    resolve('Folder created');
  })

  return promise;
}

module.exports = { generateStructure };