export default function ElectroAppliance(name, pwr) {
    this.name = name
    this.voltage = 230;
    this.power = pwr;
    this.switchState = false;
}

ElectroAppliance.prototype.pressSwitch = function() {
    this.switchState ? this.switchState = false : this.switchState = true;
    this.switchState ? console.log(`${this.name} is turned on`) : console.log(`${this.name} is turned off`);
}

ElectroAppliance.prototype.checkState = function() {
    this.switchState ? console.log(`${this.name} is working`) : console.log(`${this.name} is not working`);
}

ElectroAppliance.prototype.showCurrent = function() {
    this.switchState ? console.log(`The current of ${this.name} is ${this.power / this.voltage} Amps`) : console.log(`The ${this.name} is not working`);
}
