import './style.css';
//import Icon from './assets/cat.jpg';

console.log('いらっしゃいませにゃ！');

function componentBanner() {
  
    const banner = document.createElement('div');
    banner.innerHTML = 'Huh' + '<br/>';
    banner.classList.add('meows');

    //const myIcon = new Image();
    //myIcon.src = Icon;
    //element.appendChild(myIcon);

    return banner;
}

document.body.appendChild(componentBanner());