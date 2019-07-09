const exec = require('child_process').exec;

const Init = (folder) => {
  exec(`git init ./${folder}`);
}

module.exports = { Init };