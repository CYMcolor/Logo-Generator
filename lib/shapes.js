//shapes js
class Shape
{
    constructor(text,textColor, shape, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    renderSVG(renderText, renderShape){
        let svg =
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n    ${renderShape}\n    ${renderText}\n</svg>`
        return svg;
    }
    renderText(){
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }    
}

class Circle extends Shape
{
    constructor(text, textColor, shape, shapeColor){
        super(text, textColor, shape, shapeColor);
    }

    render(){
       return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />` 
    }

}
class Triangle extends Shape
{
    constructor(text, textColor, shape, shapeColor){
        super(text, textColor, shape, shapeColor);
    }
    render(){
        return `<polygon points="150,10 244, 170 56, 170" fill="${this.shapeColor}" />` 
     }

}
class Square extends Shape
{
    constructor(text, textColor, shape, shapeColor){
        super(text, textColor, shape, shapeColor);
    }

    render(){
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