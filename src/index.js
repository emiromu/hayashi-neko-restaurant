import './style.css';
import componentHome from './home.js';
import componentMenu from './menu.js';
import componentContact from './contact.js';
import Logo from '../assets/cat-chef.png';

console.log('いらっしゃいませにゃ！');

function componentHeader(){
    /***
    Top section of the website, contains banner and navigation
    ***/
    const header = document.createElement('div');
    header.setAttribute("id", "header");
    header.classList.add('container','header');

    return header;
}



function componentBanner() {
    /***
    Graphic Design part of the header
    ***/
    const banner = document.createElement('div');
    banner.classList.add('meows','container-horizontal');

    const leftLogo = new Image();
    leftLogo.src = Logo;
    leftLogo.classList.add('logo-left');
    banner.appendChild(leftLogo);

    const name = document.createElement('h1');
    name.innerHTML='Hayashi Neko';
    banner.appendChild(name);

    const rightLogo = new Image();
    rightLogo.src = Logo;
    rightLogo.classList.add('logo-right');
    banner.appendChild(rightLogo);

    return banner;
}

function componentNavigation(){
    /***
    Utility part of the header
    ***/

    const navigation = document.createElement('div');
    navigation.classList.add('container-horizontal');

    const homeButton = document.createElement('button');
    homeButton.setAttribute("id","homeButton");
    homeButton.classList.add('top-button');
    homeButton.innerHTML='Home';

    const menuButton = document.createElement('button');
    menuButton.setAttribute("id","menuButton");
    menuButton.classList.add('top-button');
    menuButton.innerHTML='Menu';

    const contactButton = document.createElement('button');
    contactButton.setAttribute("id","contactButton");
    contactButton.classList.add('top-button');
    contactButton.innerHTML='Contact';

    navigation.appendChild(homeButton);
    navigation.appendChild(menuButton);
    navigation.appendChild(contactButton);

    return navigation;
}

function componentMainPannel(){
    /***
    Main central area, dynamic
    ***/

    const mainPannel = document.createElement('div');
    mainPannel.setAttribute("id", "mainPannel");
    mainPannel.classList.add('container-vertical','main');

    return mainPannel;
}

function componentFooter(){
    /***
    Footer at the bottom of the page
    ***/

    const footer = document.createElement('div');
    footer.setAttribute("id", "footer");
    footer.classList.add('container-horizontal','footer');

    const emiromuDisclaimer = document.createElement('div');
    emiromuDisclaimer.innerHTML = 'Demo website by emiromu (Emilien Romulus) : <a href="https://github.com/emiromu/hayashi-neko-restaurant">github</a>';
    footer.appendChild(emiromuDisclaimer);

    const fontDisclaimer = document.createElement('div');
    fontDisclaimer.innerHTML = 'Font by nuraisyahamalia, free for non-commercial use: <a href="https://www.creativefabrica.com/designer/nuraisyahamalia/ref/369973">link</a>';
    footer.appendChild(fontDisclaimer);

    return footer;
}


document.body.classList.add('body');

document.body.appendChild(componentHeader());
document.querySelector("#header").appendChild(componentBanner());
document.querySelector("#header").appendChild(componentNavigation());
document.body.appendChild(componentMainPannel());
document.body.appendChild(componentFooter());



const mainPannel= document.querySelector("#mainPannel");

mainPannel.appendChild(componentHome());
//mainPannel.appendChild(componentMenu());
//mainPannel.appendChild(componentContact());