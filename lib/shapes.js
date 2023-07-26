class Shape
{
    constructor(text,textColor, shape, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    makeSVG(text, shape){
        let svg =
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n    ${shape}\n    ${text}\n</svg>`
        return svg;
    }
    setText(){
        return `<text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }    
}

class Circle extends Shape
{
    constructor(text, textColor, shape, shapeColor){
        super(text, textColor, shape, shapeColor);
    }

    setColor(){
       return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />` 
    }

}

class Triangle extends Shape
{
    constructor(text, textColor, shape, shapeColor){
        super(text, textColor, shape, shapeColor);
    }
    setColor(){
        return `<polygon points="150,5 244,165 56,165" fill="${this.shapeColor}" />` 
    }

}

class Square extends Shape
{
    constructor(text, textColor, shape, shapeColor){
        super(text, textColor, shape, shapeColor);
    }

    setColor(){
        return `<rect x="70" y="20" width="160" height="160" fill="${this.shapeColor}" />`;
    }
    
}

// exports
module.exports = {
    Shape, 
    Circle,
    Triangle,
    Square
}