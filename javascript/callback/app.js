//ForEach
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubles = numbers.map(function (num) {
//   return num * 2;
// });

// numbers.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

// const movies = [
//   {
//     title: 'Borat',
//     score: '80',
//   },
//   {
//     title: 'Interstellar',
//     score: '78',
//   },
//   {
//     title: 'Parasite',
//     score: '88',
//   },
// ];

// const titles = movies.map(function (movie) {
//   return movie.title.toUpperCase();
// });

// movies.forEach(function (movie) {
//   console.log(`${movie.title} - ${movie.score}/100`);
// });

//arrow
// const add = function (x, y) {
//   return x + y;
// }; // too long!!!

// const add = (x, y) => {
//   return x + y;
// };

const square = (num) => {
  return num * num; //() are optional 1 param only
};

// const rollDie = () => {
//   return Math.floor(Math.random() * 6) + 1;
// };

//implicit return
const rollDie = () => Math.floor(Math.random() * 6) + 1;

const add = (a, b) => a + b;

// const movies = [
//   {
//     title: 'Borat',
//     score: '80',
//   },
//   {
//     title: 'Interstellar',
//     score: '78',
//   },
//   {
//     title: 'Parasite',
//     score: '88',
//   },
// ];

// const newMovie = movies.map(function (movie) {
//   return `${movie.title} - ${movie.score / 10}`;
// });
// console.log(newMovie);

//const newMovies = movies.map((movie) => `${movie.title} - ${movie.score / 10}`);

//setTimout and setInterval
// console.log('Hello');
// setTimeout(() => {
//   console.log('.. are you still there??');
// }, 3000);
// console.log('Goodbye');

// const id = setInterval(() => {
//   console.log(Math.random());
// }, 2000);

//filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.filter((n) => {
  return n < 10;
});

const movies = [
  {
    title: 'Borat',
    score: 80,
    year: 2006,
  },
  {
    title: 'Interstellar',
    score: 78,
    year: 2016,
  },
  {
    title: 'Parasite',
    score: 88,
    year: '2018',
  },
];

// const goodMovie = movies.filter((movie) => {
//   return movie.score >= 80;
// });
const goodMovie = movies.filter((m) => m.score >= 80); //simpler one liner thx arrow
const goodTitle = goodMovie.map((m) => m.title);
//or
movies.filter((m) => m.score > 80).map((m) => m.title);
const badMovies = movies.filter((m) => m.score <= 80); //simpler one liner thx arrow

//Every and some
const exams = [80, 90, 92, 70, 72, 68, 60];

exams.every((score) => score >= 75);

//reduce
const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// let total = 0;
// for (let price of prices) {
//   total += price;
// }
// console.log(total);

// const total = prices.reduce((total, price) => {
//   return total + price
// })

const total = prices.reduce((total, price) => total + price);

const minPrice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});

const highestRated = movies.reduce((bestmovie, currMovie) => {
  if (currMovie.score > bestmovie.score) {
    return currMovie;
  }
  return bestmovie;
});

const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num);

//arrow func 'this'
// const person = {
//   firstName: 'Christofel',
//   lastName: 'Manopo',
//   fullName: function() { //works ok
//     return `${this.firstName} ${this.lastName}`
//   }
// };

const person = {
  firstName: 'Christofel',
  lastName: 'Manopo',
  fullName: function () {
    //undefined undefined
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this);
      console.log(this.fullName());
    }, 3000);
  },
};
