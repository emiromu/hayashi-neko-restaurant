import Menu from '../data/menu.csv';

export default function componentMenu() {

    const element = document.createElement('div');
    element.classList.add('container-vertical');
    element.innerHTML = '<h2 style="margin-top: 1em; margin-bottom: 0em;">Everyday Menu</h2>';
    
    const menuItems = [];
    const menuPictures = [];

    for(let i=1; i<Menu.length;i++){
        menuItems[i-1] = document.createElement('div');
        menuItems[i-1].setAttribute('id','menuItem'+i);
        menuItems[i-1].classList.add('menu-box');

        menuItems[i-1].innerHTML = `<div id="menuItem`+i+`Picture" class="menu-box-picture" style="background-image: url('./assets/menu-pictures/`+Menu[i][3]+`'); background-size: cover;"></div>
        <div id="menuItem`+i+`Text" class="menu-box-text">`
        +`<div id="menuItem`+i+`Name" class="menu-box-text-title">`+Menu[i][0]+`</div>`
        +`<div id="menuItem`+i+`Description" class="menu-box-text-description">`+Menu[i][1]+`</div>`
        +`<div id="menuItem`+i+`Price" class="menu-box-text-price">`+Menu[i][2]+`</div>`
        +`</div>`
    
        element.appendChild(menuItems[i-1]);
    }

    return element;
}