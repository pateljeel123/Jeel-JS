class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog('Buddy');
dog.speak();

// First Make This Anime Class In This Class Have a one Constructor and pass a parameter as name to get this para use this.
// In this Animal Class Have One Method and the name of method is speak in this method they console the name.
// Now I Make A Class Dog And Extends Animal Class to Use speak Method Now In this method i console the name.
// Now I call the Dog Class and pass the name of dog as Buddy and save into dog variable.
// Now I call the speak method of dog and it will console the name of dog and the name of dog is Buddy.