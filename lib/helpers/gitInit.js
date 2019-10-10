const path = require('path');
const git = require('simple-git');

const Init = (folder) => {
  git(`./${folder}`).init()
                 .add('./*')
                 .commit('Initial commit');
}

module.exports = { Init };