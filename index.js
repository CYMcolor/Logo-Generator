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
        name: 'textColor',
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
        name: 'shapeColor',
    }
]


//
function init() {
    //start up inquirer, then call writeToFile()
    inquirer.prompt(questions)
    .then((data) => {
        const {text, textColor, shape, shapeColor} = data;
        switch (shape) {
            case 'circle':
                const circle = new shapes.Circle(text, textColor, shape, shapeColor);
                console.log(circle.render());
                console.log(circle.renderText());
                break;
        
            case 'triangle':
                const triangle = new shapes.Triangle(text, textColor, shape, shapeColor);
                console.log(triangle.render());
                break;
            case 'square':
                const square = new shapes.Square(text, textColor, shape, shapeColor);
                console.log(square.render());
                break;
        }
        
    });
}

// Function call to initialize app
init();



//55.620,160 244.370,160 150,0
