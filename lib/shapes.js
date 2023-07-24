//shapes js
class Shape
{
    constructor(text,textColor, shape, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    renderSVG(){
        
    }
}

class Circle extends Shape
{
    constructor(text,textColor, shape, shapeColor){
        super(text,textColor, shape, shapeColor);
    }

}
class Triangle extends Shape
{
    constructor(text,textColor, shape, shapeColor){
        super(text,textColor, shape, shapeColor);
    }

}
class Square extends Shape
{
    constructor(text,textColor, shape, shapeColor){
        super(text,textColor, shape, shapeColor);
    }

}

// exports
module.exports = {
    Circle,
    Triangle,
    Square
}