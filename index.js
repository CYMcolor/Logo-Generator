// dependecies
const { writeFile } = require('fs/promises');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');
var validateColor = require("validate-color").default;
// prompts
const questions = [
    {
        type: 'input',
        message: 'Enter text (up to 3 charcters):',
        name: 'text',
        validate: (input) => {
            if (input.length > 3) {
               return 'Text is greater than 3, enter again';
            }
            if (input.length < 1 ) {
                return 'Text was empty, enter again';
             }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Enter text color:',
        name: 'textColor',
        validate: (input) => {
            if (!validateColor(input)) {
               return 'Invalid color, enter again';
            }
            return true;
         }   
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
        validate: (input) => {
            if (!validateColor(input)) {
               return 'Invalid color, enter again';
            }
            return true;
        }
    }
]

//main function
function init() {
    //start up inquirer, then call writeToFile()
    inquirer.prompt(questions)
    .then((data) => {
        const {text, textColor, shape, shapeColor} = data;
        var renderShape;
        switch (shape) {
            case 'circle':
                renderShape = new shapes.Circle(text, textColor, shape, shapeColor);
                break;
            case 'triangle':
                renderShape = new shapes.Triangle(text, textColor, shape, shapeColor);
                break;
            case 'square':
                renderShape = new shapes.Square(text, textColor, shape, shapeColor);
                break;
        }
        return renderShape.makeSVG(renderShape.setText(), renderShape.setColor());   
    })
    .then((svg) => writeFile(`./examples/logo.svg`, svg)) 
    .catch((err) => {
        console.log(err,'\nUnable to read data');
    });
}

// Function call to initialize app
init();
