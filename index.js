//dependecies
const { readFile, writeFile } = require('fs/promises');
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
        let svg = ``;
        switch (shape) {
            case 'circle':
                const circle = new shapes.Circle(text, textColor, shape, shapeColor);
                svg = circle.renderSVG(circle.renderText(), circle.render());
                break;
        
            case 'triangle':
                const triangle = new shapes.Triangle(text, textColor, shape, shapeColor);
                svg = triangle.renderSVG(triangle.renderText(), triangle.render());
                break;
            case 'square':
                const square = new shapes.Square(text, textColor, shape, shapeColor);
                svg = square.renderSVG(square.renderText(), square.render());
                break;
        }
        return writeFile('./examples/logo.svg',svg);
    })
    .catch((err) => {
        console.log(err,'\nUnable to read data');
    });
}

// Function call to initialize app
init();



//55.620,160 244.370,160 150,0
