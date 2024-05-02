class Shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
}

class ColoredCircle extends Circle {
    constructor(color, radius) {
        super(color, radius);
    }
}

let coloredCircle = new ColoredCircle('blue', 5);
console.log(coloredCircle.getColor());


//1. The Shape class has a constructor that takes a color parameter and assigns it to an instance property. It also has a getColor() method that returns the color.
//2. The Circle class extends the Shape class and adds a radius property to its constructor. It calls the super constructor to initialize the color property.
//3. The ColoredCircle class extends the Circle class and has the same constructor signature.
//4. An instance of ColoredCircle is created with a color of 'blue' and a radius of 5.
//5. Finally, the code logs the result of calling the getColor() method on the coloredCircle instance, which will output 'blue' to the console.