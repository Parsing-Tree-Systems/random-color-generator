import { CSSHelper } from './helpers/helpers.js';

const container = document.createElement('div');
container.setAttribute('class', 'flex-wrap container');

const counterInput = document.querySelector('#counter');
const checkboxes = document.querySelectorAll('input[type=checkbox]');

const shades = document.createElement('div');
shades.setAttribute('class', 'flex-wrap shades');

let choosenShades = [];

let colors = [];
let counter = parseInt(counterInput.value);

counterInput.addEventListener('change', (event) => {
  
  if(event.target.value > 10000) {
    event.preventDefault();
    counterInput.value = 10000;
    counter = 10000;
  }

  console.log(parseInt(event.target.value));
  counter = parseInt(event.target.value);
  
  loadColors();
});

checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    choosenShades = 
      Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
      .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
      .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
      console.group(choosenShades);
      
      shades.innerHTML = '';
      if(choosenShades.length) {
        container.innerHTML = '';
        counterInput.value = 225;
        counterInput.disabled = true;
        choosenShades.forEach(it => loadShades(it));
      } else {
        counterInput.value = 10000;
        counterInput.disabled = false;
        loadColors();
      }  
    
  })
});

function loadShades(name) {
  
  const shadeDiv = document.createElement('div');
  shadeDiv.setAttribute('class', `flex-wrap ${name} tone`);

  colors = [];

  for (let i = 255; i >=0 ; i--) {

    let textColor = '';
  
    if (i >= 124) {
      textColor = '#000';
    } else {
      textColor = '#fff';
    }

    textColor = '#fff';
  
    if(i>30) {
      let div = document.createElement('div');

      const rgb = () => {
        switch(name) {
          case 'red': {
            return `rgb(${i}, 0, 0)`;
          }
          case 'green': {
            return `rgb(0, ${i}, 0)`; 
          }
          case 'blue': {
            return `rgb(0, 0, ${i})`; 
          }
        }
      }
      
      div.setAttribute(
        'style',
        `background-color: ${rgb()};
        color: ${textColor};`
      );
    
      div.setAttribute('class', 'cell shade');
      const subScript = document.createElement('sub');
      subScript.innerText = `${i}`;
    
      div.prepend(subScript);
    
      div.innerText = rgb();
    
      shadeDiv.appendChild(div);
    }

  }
  shades.append(shadeDiv);
  document.body.append(shades);
}

function loadColors() {

  container.innerHTML = '';

  for (let i = 0; i < counter; i++) {
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
  
    div.setAttribute('class', 'cell color');
    const subScript = document.createElement('div');
    subScript.innerText = `${i}`;
  
    div.innerText = `rgb(${colors[i].red}, ${colors[i].green}, ${colors[i].blue})`;
    div.setAttribute('id', i);
    container.appendChild(div);
  }
  
  document.body.append(container);
  
}

window.onload = () => {
  loadColors();
};