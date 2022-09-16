// Returns true if age is over 18, otherwise returns false

function areYouOldEnough(age) {
  if (age < 18) {
    console.log(false);
    return `U suck`;
  } else {
    console.log(true);
    return true;
  }
}

console.log(areYouOldEnough(88));
document.write(areYouOldEnough(10));

alert(areYouOldEnough(5));
alert(areYouOldEnough(25));

// Define an object to hold data for a person
/*var person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  address: "papu13tie",
  telephone: "2340235",
};

var person2 = {
  firstName: "Max",
  lastName: "hoe",
  age: 23,
  eyeColor: "grey",
  address: "heot425tie",
  telephone: "234368",
};

var person3 = {
  firstName: "Marja",
  lastName: "saarao",
  age: 3,
  eyeColor: "red",
  address: "ohra3tie",
  telephone: "2334240235",
};

var person4 = {
  firstName: "rose",
  lastName: "ame",
  age: 34,
  eyeColor: "orange",
  address: "134kilokatu",
  telephone: "74359235",
};

// console.log(person.age);

let printinfo = function () {
  console.log(person);
};

// printinfo();

let persons = [person1, person2, person3, person4];

persons.map((person) => {
  console.log(`${person.firstName} ${person.lastName}`);
});

console.log("hi!");
*/
