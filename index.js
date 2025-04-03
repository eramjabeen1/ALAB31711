"use strict";
// @ts-check
// typescript will check our code and show us problems before running it
// this class describes a basic vehicle (lab requirement)
class Vehicle {
    constructor(make, model, status) {
        this.make = make;
        this.model = model;
        this.status = status;
    }
    // method to change the status of a vehicle
    updateStatus(newStatus) {
        this.status = newStatus;
    }
}
// car class extends vehicle (lab requirement)
class Car extends Vehicle {
    constructor(make, model, status) {
        super(make, model, status);
    }
}
// motorcycle class also extends vehicle (lab requirement)
class MotorCycle extends Vehicle {
    constructor(make, model, status) {
        super(make, model, status);
    }
}
// function to print the status of any vehicle (lab requirement)
function showStatus(vehicle) {
    console.log(`${vehicle.make} ${vehicle.model} is ${vehicle.status}.`);
}
// testing the vehicle-related classes
const dailyDrive = new Car("toyota", "sienna", "started"); // real mom van vibes
const weekendBike = new MotorCycle("kawasaki", "ninja", "stopped"); // fun ride
// using the print function to show what's going on
showStatus(dailyDrive); // toyota sienna is started.
showStatus(weekendBike); // kawasaki ninja is stopped.
// my custom generic class for flexible make/model data
class MyCycle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    // prints just one make/model pair — either normal or from array
    print(index = 0) {
        if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
            console.log(`this cycle is a ${this.make} ${this.model}.`);
        }
        else if (Array.isArray(this.make) && Array.isArray(this.model)) {
            if (this.make[index] !== undefined && this.model[index] !== undefined) {
                console.log(`this cycle has a ${this.make[index]} ${this.model[index]} at spot ${index}.`);
            }
            else {
                console.log("oops, this cycle wasn't made correctly.");
            }
        }
        else {
            console.log("oops, this cycle wasn't made correctly.");
        }
    }
    // prints all make/model combos if they are arrays
    printAll() {
        if (Array.isArray(this.make) && Array.isArray(this.model)) {
            const length = Math.min(this.make.length, this.model.length);
            for (let i = 0; i < length; i++) {
                console.log(`this cycle has a ${this.make[i]} ${this.model[i]} at spot ${i}.`);
            }
        }
        else if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
            console.log(`this cycle is a ${this.make} ${this.model}.`);
        }
        else {
            console.log("oops, this cycle wasn't made correctly.");
        }
    }
    // this is a bonus method i made to show what type of data this cycle has
    getTypeInfo() {
        const typeOfMake = Array.isArray(this.make) ? "array" : typeof this.make;
        const typeOfModel = Array.isArray(this.model) ? "array" : typeof this.model;
        console.log(`this cycle uses make type: ${typeOfMake}, and model type: ${typeOfModel}`);
    }
}
// testing with numbers
const numericCycle = new MyCycle(1, 2);
numericCycle.print();
numericCycle.printAll();
numericCycle.getTypeInfo();
// testing with plain strings
const simpleCycle = new MyCycle("basic", "starter");
simpleCycle.print();
simpleCycle.printAll();
simpleCycle.getTypeInfo();
// testing with arrays of brands and models
const bikeBrands = ["giant", "trek", "cannondale"];
const bikeModels = ["escape 3", "marlin 5", "trail 5"];
const bikeCollection = new MyCycle(bikeBrands, bikeModels);
bikeCollection.print(2);
bikeCollection.printAll();
bikeCollection.getTypeInfo();
// extra function to add two numbers (lab asked to demo type errors)
function add(x, y) {
    return x + y;
}
// this will cause a type error on purpose
// add(numericCycle.make, 5); // <-- typescript will stop this from working
// another example of a mismatch to show type protection
// const oopsCycle = new MyCycle("brandA", ["modelX", "modelY"]);
// oopsCycle.print(); // won't compile because one is a string and the other is an array
// personal reflection:
// this was my first time really coding in typescript and it was kinda fun once i got it working.
// i learned how to use classes, union types, generics, and how typescript protects code before it runs.
// i changed the class names and test data to make it feel more like me and added a bonus method to show extra understanding.
