export default class ElectroAppliance {
    constructor(name, pwr) {
    this.name = name;
    this.voltage = 230;
    this.power = pwr;
    this.switchState = false;
    }

    //turn on or turn off appliance and show its state
    pressSwitch() {
        this.switchState ? this.switchState = false : this.switchState = true;
        this.switchState ? console.log(`${this.name} is turned on`) : console.log(`${this.name} is turned off`);
    }
    //check state
    checkState() {
        this.switchState ? console.log(`${this.name} is working`) : console.log(`${this.name} is not working`);
    }
    //show consumption current
    showCurrent() {
        this.switchState ? console.log(`The current of ${this.name} is ${this.power / this.voltage} Amps`) : console.log(`The ${this.name} is not working`);
    }
}
