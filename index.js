//dependecies
const { writeFile } = require('fs/promises');
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

//main function
function init() {
    //start up inquirer, then call writeToFile()
    inquirer.prompt(questions)
    .then((data) => {
        const {text, textColor, shape, shapeColor} = data;
        let svg = ``;
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
        svg = renderShape.renderSVG(renderShape.renderText(), renderShape.render());
        return {text: text, svg: svg};
    })
    .then((info) => writeFile(`./examples/${info.text}.svg`, info.svg)) 
    .catch((err) => {
        console.log(err,'\nUnable to read data');
    });
}

// Function call to initialize app
init();



// euilateral triangle: 55.620,160 244.370,160 150,0
