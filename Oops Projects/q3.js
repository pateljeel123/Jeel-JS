class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getInfo() {
        return `Make: ${this.make}, Model: ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model);
        this.year = year;
    }
    getInfo() {
        return `${super.getInfo()}, Year: ${this.year}`;
    }
}

let myCar = new Car('Toyota', 'Camry', 2020);
console.log(myCar.getInfo());

// The Vehicle class is defined with a constructor that takes parameters and assigns them to instance properties. It also has a getInfo() method that returns a string containing the make and model.
// The Car class extends the Vehicle class and adds a year property to its constructor. It calls the super constructor to initialize the make and model properties.
// The getInfo() method in the Car class overrides the getInfo() method in the Vehicle class. It calls the super.getInfo() method to get the make and model information and appends the year information to it.
// An instance of Car is created with a make of 'Toyota', a model of 'Camry', and a year of 2020.
// Finally, the code logs the result of calling the getInfo() method on the myCar instance, which will output 'Make: Toyota, Model: Camry, Year: 2020' to the console.