var firstName = prompt("Enter your first name: ")
var lastName = prompt("Last name:")
var age = prompt("Your age:")
var height = prompt("How tall are you? (cm)")
var pet = prompt("Your pet name:")

if (firstName[0] == lastName[0]) {
    var spyName = 1;
}

if (age > 20 && age < 30) {
    var spyAge = 1;
}

if (height >= 170) {
    var spyHeight = 1;
}

console.log(pet.length)

if (pet[pet.length - 1] == "y") {
    var spyPet = 1;
}

if (spyName && spyAge && spyHeight && spyPet) {
    console.log ("I got you spy! This is a secret message :)")
}