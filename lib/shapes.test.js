const { Circle } = require('./shapes.js');

const text = "Say";
const textColor = "red";
const shapeColor = "white";
describe('Test Shape', () =>{
    
    describe('Test Circle', () => {
        it('It should return true an element called circle with fill set to the shapeColor', () => {
          const circle = new Circle(text, textColor, 'circle', shapeColor);
          const element = '<circle cx="150" cy="100" r="80" fill="white" />';
          const result = circle.setColor();
          expect(result).toEqual(element);
        });
    });
});