const path = require('path');
const git = require('simple-git');

const Init = (folder, remote) => {
  git(`./${folder}`).init()
                 .add('./*')
                 .commit('Initial commit')
                 .addRemote('origin', remote)
                 .checkoutLocalBranch('development')
                 .push('origin', 'master')
                 .push('origin', 'development');

}

module.exports = { Init };