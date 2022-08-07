import { CSSHelper } from './helpers/helpers.js';

const container = document.createElement('div');
container.setAttribute('class', 'flex-wrap container');

const colors = [];

for (let i = 0; i < 10000; i++) {
  let textColor = '';

  const cssHelper = new CSSHelper(i);

  colors.push({
    red: cssHelper.randomNumberwithInRange(i * 5),
    green: cssHelper.randomNumberwithInRange(i * 10),
    blue: cssHelper.randomNumberwithInRange(i * 20),
  });

  if (colors[i].red >= 124 || colors[i].green >= 124) {
    textColor = '#000';
  } else {
    textColor = '#fff';
  }

  let div = document.createElement('div');

  div.setAttribute(
    'style',
    `background-color: rgb(
      ${colors[i].red}, ${colors[i].green}, ${colors[i].blue}
    ); 
    color: ${textColor};`
  );

  div.setAttribute('class', 'cell');
  const subScript = document.createElement('sub');
  subScript.innerText = `${i}`;

  div.prepend(subScript);

  div.innerText = `rgb(${colors[i].red}, ${colors[i].green}, ${colors[i].blue})`;

  container.appendChild(div);
}

document.body.append(container);
