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
  },
  {
    name:"git",
    type: "confirm",
    message: "Initialize git repo?",
    initial: true
  },
  {
    name: "remote",
    type: prev => prev == true ? "text" : null,
    message: "Git remote: "
  }
];

const onCancel = ( prompt, answers ) => {
  answers._canceled_ = true;
  return false;
}

const ask = async () => {
  const response = await Prompts(questions, { onCancel });

  return response;
}

module.exports = { ask }