// function rollDie(numSides) {
//   if (numSides === undefined) {
//     numSides = 6;
//   }
//   return Math.floor(Math.random() * numSides) + 1;
// } // old way

function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides);
}

function greet(msg = 'Hey there', person) {
  console.log(`${msg}, ${person}!`);
}

//spread
//Math.max(...nums); //nan
//Math.max(nums); //53456

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs];

//spread with object

const feline = { legs: 4, family: 'feline' };
const canine = { isFurry: true, family: 'Caninae' };

const catDogs = { ...feline, ...canine }; //order matters! "family" canine wins

const dataFromForm = {
  email: 'kevin@gmail.com',
  password: 'kevin123',
  username: 'kevin',
};
const newUser = { ...dataFromForm, id: 2345, isAdmin: false };

//rest (collects all remaining arr into actual array)
// function sum() {
//   return arguments.reduce((total, el) => total + el);
// }

function sum(...nums) {
  return nums.reduce((total, el) => total + el);
}

function raceResult(gold, silver, ...everyoneElse) {
  console.log(`Gold Medal Goes TO: ${gold}`);
  console.log(`Silver Medal Goes TO: ${silver}`);
  console.log(`And Thanks to Everyone Else : ${everyoneElse}`);
}
raceResult('Kevin', 'John', 'Tina', 'Joe', 'Mai');

//destructuring array
const scores = [19238123, 923898, 2362323, 217632, 237163];

//without destructuring
const highscore = scores[0];
const secondHighscore = scores[1];

const [gold, silver, bronze] = scores;
const [highest, ...theRest] = scores;

//destructuring object
const user = {
  email: 'kevin@gmail.com',
  password: 'dkada',
  firstName: 'Christofel',
  lastName: 'Manopo',
  born: 2000,
  bio: 'skibidididi',
  city: 'Tangerang',
};

// const firstName = user.firstName;
// const lastName = user.lastName; //annoying

// const { email, firstName, lastName, city, bio } = user;

const { born: birthYear } = user;

//destructuring params
function fullName({ firstName, lastName }) {
  return `${firstName}, ${lastName}`;
}
