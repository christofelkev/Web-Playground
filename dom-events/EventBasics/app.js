const btn = document.querySelector('#v2');

btn.onclick = function () {
  console.log('You clicked me');
  console.log('I hope it worked!');
};

function scream() {
  console.log('AAAAAAAAAAAAAAAA');
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
  alert('you clicked the h1!');
};

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
  alert('CLICKED!');
});
