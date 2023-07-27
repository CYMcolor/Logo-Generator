const { Circle, Triangle, Square, Shape } = require('./shapes.js');

const text = "Say";
const textColor = "red";
const shapeColor = "white";
describe('Test Shapes:', () =>{
    //circle tests
    describe('Test Circle:', () => {
        it('Should return true when the element produced has fill set to the shapeColor from the parmeter', () => {
            const circle = new Circle(text, textColor, 'circle', shapeColor);
            const element = '<circle cx="150" cy="100" r="80" fill="white" />';
            const result = circle.setColor();
            expect(result).toEqual(element);
        });
        it('Should return false when the element produced has fill set to a different color than the shapeColor from the parmeter', () => {
            const circle = new Circle(text, textColor, 'circle', shapeColor);
            const element = '<circle cx="150" cy="100" r="80" fill="red" />';
            const result = circle.setColor();
            expect(result).not.toEqual(element);
        });
    });
    //triangle tests
    describe('Test Triangle:', () => {
        it('Should return true when the element produced has fill set to the shapeColor from the parmeter', () => {
            const triangle = new Triangle(text, textColor, 'triangle', shapeColor);
            const element = '<polygon points="150,5 244,165 56,165" fill="white" />';
            const result = triangle.setColor();
            expect(result).toEqual(element);
        });
        it('Should return false when the element produced has fill set to a different color than the shapeColor from the parmeter', () => {
            const triangle = new Triangle(text, textColor, 'triangle', shapeColor);
            const element = '<polygon points="150,5 244,165 56,165" fill="red" />';
            const result = triangle.setColor();
            expect(result).not.toEqual(element);
        });
    });
    //square tests
    describe('Test Square:', () => {
        it('Should return true when the element prodeuced has fill set to the shapeColor from the parmeter', () => {
            const square = new Square(text, textColor, 'square', shapeColor);
            const element = '<rect x="70" y="20" width="160" height="160" fill="white" />';
            const result = square.setColor();
            expect(result).toEqual(element);
        });
        it('Should return false when the element produced has fill set to a different color than the shapeColor from the parmeter', () => {
            const square = new Square(text, textColor, 'square', shapeColor);
            const element = '<rect x="70" y="20" width="160" height="160" fill="red" />';
            const result = square.setColor();
            expect(result).not.toEqual(element);
        });
    });
    //Text tests
    describe('Correct Text and TextColor:', () => {
        it('Should return true when the element produced has text equal to the parameter text and fill is set to the textColor', () => {
            const shape = new Shape(text, textColor, 'shape', shapeColor);
            const element = '<text x="150" y="115" font-size="60" text-anchor="middle" fill="red">Say</text>';
            const result = shape.setText();
            expect(result).toEqual(element);
        });
        it('Should return false when the element produced has text equal to the parameter text, but the fill is NOT set to the textColor', () => {
            const shape = new Shape(text, textColor, 'shape', shapeColor);
            const element = '<text x="150" y="115" font-size="60" text-anchor="middle" fill="yellow">Say</text>';
            const result = shape.setText();
            expect(result).not.toEqual(element);
        });
        it('Should return false when the element produced does NOT have text equal to the parameter text, but the fill IS set to the textColor', () => {
            const shape = new Shape(text, textColor, 'shape', shapeColor);
            const element = '<text x="150" y="115" font-size="60" text-anchor="middle" fill="red">Bob</text>';
            const result = shape.setText();
            expect(result).not.toEqual(element);
        });
    });

    //SVG
    describe('Render SVG file:', () => {
        it('Should return true when the SVG file has both the text and shape matching the function parmeters', () => {
            const shape = new Shape(text, textColor, 'shape', shapeColor);
            const textString = '<text x="150" y="115" font-size="60" text-anchor="middle" fill="red">Say</text>';
            const shapeString = '<rect x="70" y="20" width="160" height="160" fill="red" />';
            const result = shape.makeSVG(textString,shapeString);
            const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n\t${shapeString}\n\t${textString}\n</svg>`
        
            expect(result).toEqual(svg);
        });

        it('Should return false when the SVG file the text matching the function parmeters, but NOT the shape', () => {
            const shape = new Shape(text, textColor, 'shape', shapeColor);
            const textString = '<text x="150" y="115" font-size="60" text-anchor="middle" fill="red">Say</text>';
            const shapeString = '<rect x="70" y="20" width="160" height="160" fill="red" />';
            const badShape = 'badshape'
            const result = shape.makeSVG(textString,shapeString);
            const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n\t${badShape}\n\t${textString}\n</svg>`
        
            expect(result).not.toEqual(svg);
        });
        it('Should return false when the SVG file the shape matching the function parmeters, but NOT the text', () => {
            const shape = new Shape(text, textColor, 'shape', shapeColor);
            const textString = '<text x="150" y="115" font-size="60" text-anchor="middle" fill="red">Say</text>';
            const shapeString = '<rect x="70" y="20" width="160" height="160" fill="red" />';
            const badText = 'badshape'
            const result = shape.makeSVG(textString,shapeString);
            const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n\t${shapeString}\n\t${badText}\n</svg>`
        
            expect(result).not.toEqual(svg);
        });
    });
});