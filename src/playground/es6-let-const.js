let name = "lol";
 name = "llol";
console.log('name',name);

let lol = (x) =>  x*x; 
console.log(lol(4));

const user = {
    name: "Aditya",
    cities:["Odisha","kolkata","pune"],
    printPlaces() {
        this.cities.forEach((city) => {
            console.log(this.name+" lived in "+city);
        })
    }
}

user.printPlaces();


