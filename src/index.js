import './style.css';
//import Icon from './assets/cat.jpg';



function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Huh' + '<br/>';
  console.log('Welcome');

  //element.classList.add('hello');

  //const myIcon = new Image();
  //myIcon.src = Icon;
  //element.appendChild(myIcon);

  return element;

}

document.body.appendChild(component());