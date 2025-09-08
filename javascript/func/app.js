const myMath = {
  PI: 3.14159,
  square(num) {
    return num * num;
  },
  cube(num) {
    return num ** 3;
  },
};

const cat = {
  name: 'Blue Roman',
  color: 'grey',
  meow() {
    console.log(`${this.name} says Meowww`);
  },
};

const meow2 = cat.meow;

//try and catch
function yell(msg) {
  msg.toUpperCase;
}
