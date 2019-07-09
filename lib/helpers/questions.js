const Prompts = require('prompts');

const questions = [
  {
    name: "project",
    type: "text",
    message: "Projectname: "
  },
  {
    name: "schemas",
    type: "list",
    message: "Schema(s)[comma separated]: "
  }
];


const ask = async () => {
  const response = await Prompts(questions);

  return response;
}

module.exports = { ask }