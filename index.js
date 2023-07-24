//dependecies
const fs = require('fs/promises');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');

// prompts
const questions = [
    {
        type: 'input',
        message: 'Enter text (up to 3 charcters):',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Enter text color:',
        name: 'text-color',
    },
    {
        type: 'list',
        message: 'Choose shape:',
        name: 'shape',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        message: 'Enter shape color:',
        name: 'shape-color',
    }
]


//
function init() {
    //start up inquirer, then call writeToFile()
    inquirer.prompt(questions)
    .then((data) => {});
}

// Function call to initialize app
init();


//55.620,160 244.370,160 150,0
