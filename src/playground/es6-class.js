class Person {
    constructor(name,age) {
        //default option in es6
        this.name = name || "test";
        this.age = age || 0;
    }
    getGreeting() {
        return `Hii i am ${this.name} `;
    }

    getDescription(){
        return `${this.name} is ${this.age === 0 ? `${this.age} year old` : `${this.age} year(s) old`}`
    }
}

//subclass
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let desc = super.getDescription();
        if(this.hasMajor){
            desc +=` ${this.major}`;
        }
        return desc;
    }
}

class Traveller extends Person{
    constructor(name,age,location){
        super(name,age);
        this.location = location;
    }

    getHomeLocation() {
        let loca = super.getDescription();
        if(this.hasLocation()){
            loca =  loca+ " from " +this.location;
        }
        return loca;
    }

    hasLocation() {
        return !!this.location;
    }
}


const lol = new Traveller("Andrew Mead",10,"Bhadrak");
console.log(lol.getHomeLocation());

const lolwa = new Traveller("Handi");
console.log(lolwa.getHomeLocation());

// const me = new Student("Aditya narayan",10,"Computer Science");
// console.log(me.getDescription());

// const other = new Student();
// console.log(other.getDescription());