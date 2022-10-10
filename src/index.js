console.log('hello from ./src/index.js');
import './style.css';

function pageLoad() {

  console.log('hello inside pageLoad()')

  let header = document.createElement('header');
  // console.log(header);


  let div = document.createElement('div');

  const h1 = document.createElement('h1');
  h1.innerHTML = 'Thriver';
  h1.className = 'h1';

  let p = document.createElement('p');
  p.innerHTML = 'Food for your Best life.';
  p.className = 'p';

  let img = document.createElement('img');
  img.className = 'img';
  img.src = './restaurant.jpeg';
  console.log(img);
  
  div.appendChild(h1);
  div.appendChild(p);
  div.appendChild(img);

  return div;
}

document.body.appendChild(pageLoad());