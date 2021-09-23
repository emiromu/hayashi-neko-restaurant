import './style.css';
import Menu from '../data/menu.csv';
//import Icon from './assets/cat.jpg';

console.log('いらっしゃいませにゃ！');
console.log(Menu);

function componentBanner() {
  
    const banner = document.createElement('div');
    banner.innerHTML = 'Hayashi Neko' + '<br/>';
    banner.classList.add('meows');

    //const myIcon = new Image();
    //myIcon.src = Icon;
    //element.appendChild(myIcon);

    return banner;
}

document.body.appendChild(componentBanner());