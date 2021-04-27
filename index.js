//output object prop and values to console
import objOutput from './objOutput.js';
//func cheking if there is prop in obj
import checkProp from './checkProp.js';
//function creating empty object with null __proto__
import createOrphanObj from './createOrphanObj.js';
//Function constructor
import ElectroAppliance from './appliance.js';
//Class
import ClassAppliance from './5_applianceClass.js';

//Task 1. 
const cityMns = {
    city: 'Minsk',
    area: 'Central',
}

const person1 = Object.create(cityMns);
person1.birthCity = 'Brest';

objOutput(person1);
console.log(checkProp('birthCity', person1));
console.log(createOrphanObj());

//Task 4. Function constructor

    //creating Lamp
    console.log('====================Operations with lamp ========================');
    let lamp = new ElectroAppliance('Lamp', 60);
    console.log('Lamp is created', lamp)
    lamp.checkState();
    lamp.pressSwitch();
    lamp.checkState();
    //adding new properties
    lamp.lightTemp = '2700K';
    lamp.lightFlow = 800;
    lamp.type = 'desk';
    lamp.dimmer = function(num) {
        if (this.lightFlow <= 800 && this.lightFlow >= 100) {
            this.lightFlow += num;
            this.lightFlow > 800 ? this.lightFlow = 800 : this.lightFlow;
            this.lightFlow < 100 ? this.lightFlow = 100 : this.lightFlow;
        console.log(`The light flow is ${this.lightFlow} Lumens`);
        }
        else console.log(`The light flow is ${this.lightFlow} Lumens`)
    };
    console.log('Lamp aquired own props', lamp);
    lamp.showCurrent();
    lamp.dimmer(-750);

    let lampRed = Object.create(lamp);
    lampRed.color = 'red';
    console.log(lampRed, lampRed.dimmer(50), lampRed.pressSwitch());

    //Creating Blender
    console.log('====================Operations with blender ========================');
    let blender = new ElectroAppliance('Blender', 600);
    blender.speed = 4;
    blender.speedUP = function() {
        if (this.speed <= 8 && this.speed >= 1) {
            ++this.speed;
            console.log(`Current speed of ${this.name} is ${this.speed}`)
        }
        else console.log('The speed is max');
    }
    blender.speedDown = function() {
        if (this.speed <= 8 && this.speed >= 1) {
            --this.speed;
            console.log(`Current speed of ${this.name} is ${this.speed}`)
        }
        else console.log('The speed is min');
    }
    console.log('Blender aquired own props', blender);
    blender.speedUP();
    blender.speedUP();
    blender.checkState();
    blender.pressSwitch();
    blender.checkState();
    console.log(blender.speed);

//Task 5. Classes

    class Lamp extends ClassAppliance {
        constructor(type, lightTemp){
            super('Lamp', 60);
            this.lightTemp = lightTemp;
            this.lightFlow = (this.power * 12);
            this.type = type;
        }
        dimmer(num) {
            super.checkState();
            if (this.lightFlow <= 800 && this.lightFlow >= 100) {
                this.lightFlow += num;
                this.lightFlow > 800 ? this.lightFlow = 800 : this.lightFlow;
                this.lightFlow < 100 ? this.lightFlow = 100 : this.lightFlow;
            console.log(`The light flow is ${this.lightFlow} Lumens`);
            }
            else console.log(`The light flow is ${this.lightFlow} Lumens`)
        }
    }

    let lampC = new Lamp('desk', '2700K');
    console.log(lampC);

    lampC.pressSwitch();
    lampC.dimmer(-5);

    class Blender extends ClassAppliance {
        constructor(maxSpeed) {
            super('blender', 1300)
            this.speed = 4;
            this.maxSpeed = maxSpeed;
        }
        speedUP() {
            if (this.speed <= this.maxSpeed && this.speed >= 1) {
                ++this.speed;
                console.log(`Current speed of ${this.name} is ${this.speed}`)
            }
            else console.log('The speed is max');
        }
        speedDown() {
            if (this.speed <= this.maxSpeed && this.speed >= 1) {
                --this.speed;
                console.log(`Current speed of ${this.name} is ${this.speed}`)
            }
            else console.log('The speed is min');
        }
    }

    let blenderC = new Blender(6);
    console.log(blenderC);
    blenderC.speedUP();
    blenderC.pressSwitch();