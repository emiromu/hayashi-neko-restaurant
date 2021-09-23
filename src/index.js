import './style.css';
import componentHome from './home.js';
import componentMenu from './menu.js';
import componentContact from './contact.js';
//import Icon from './assets/cat.jpg';

console.log('いらっしゃいませにゃ！');

function componentBanner() {
    /***

    ***/

    const banner = document.createElement('div');
    banner.innerHTML = 'Hayashi Neko' + '<br/>';
    banner.classList.add('meows');

    //const myIcon = new Image();
    //myIcon.src = Icon;
    //element.appendChild(myIcon);

    return banner;
}

function componentTopMenu(){
    /***

    ***/

    const topMenu = document.createElement('div');
    topMenu.innerHTML = 'top menu here';

    return topMenu;
}

function componentMainPannel(){
    /***

    ***/

    const mainPannel = document.createElement('div');
    mainPannel.setAttribute("id", "mainPannel");
    mainPannel.innerHTML = 'main pannel here';

    return mainPannel;
}

function componentFooter(){
    /***

    ***/

    const footer = document.createElement('div');
    footer.innerHTML = 'footer here';

    return footer;
}


document.body.classList.add('body');



document.body.appendChild(componentBanner());
document.body.appendChild(componentTopMenu());
document.body.appendChild(componentMainPannel());
document.body.appendChild(componentFooter());


const mainPannel= document.querySelector("#mainPannel");

mainPannel.appendChild(componentHome());
