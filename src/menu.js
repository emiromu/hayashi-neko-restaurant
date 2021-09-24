import Menu from '../data/menu.csv';
import MenuPicture1 from '../assets/menu-pictures/hanyashi.png';
import MenuPicture2 from '../assets/menu-pictures/blackhayashi.png';
import MenuPicture3 from '../assets/menu-pictures/benishoga.png';
import MenuPicture4 from '../assets/menu-pictures/tea.png';
import MenuPicture5 from '../assets/menu-pictures/bananamilk.png';

export default function componentMenu() {

    const element = document.createElement('div');
    element.classList.add('container-vertical');
    element.innerHTML = '<h2 style="margin-top: 1em; margin-bottom: 0em;">Everyday Menu</h2>';
    
    /* STATIC - webpack */
    /*1*/
    const menuBox1 = document.createElement('div');
    menuBox1.setAttribute('id','menuItem1');
    menuBox1.classList.add('menu-box');

    const menuPictures1 = new Image();
    menuPictures1.src = MenuPicture1;
    menuPictures1.setAttribute('id','menuItem1Picture');
    menuPictures1.classList.add('menu-box-picture');

    const menuText1 = document.createElement('div');
    menuText1.setAttribute('id','menuItem1Text');
    menuText1.classList.add("menu-box-text");
    menuText1.innerHTML=`<div id="menuItem1Name" class="menu-box-text-title">`+Menu[1][0]+`</div>`
    +`<div id="menuItem1Description" class="menu-box-text-description">`+Menu[1][1]+`</div>`
    +`<div id="menuItem1Price" class="menu-box-text-price">`+Menu[1][2]+`</div>`
    +`</div>`;
    menuBox1.appendChild(menuPictures1);
    menuBox1.appendChild(menuText1);

    /*2*/
    const menuBox2 = document.createElement('div');
    menuBox2.setAttribute('id','menuItem2');
    menuBox2.classList.add('menu-box');

    const menuPictures2 = new Image();
    menuPictures2.src = MenuPicture2;
    menuPictures2.setAttribute('id','menuItem2Picture');
    menuPictures2.classList.add('menu-box-picture');

    const menuText2 = document.createElement('div');
    menuText2.setAttribute('id','menuItem2Text');
    menuText2.classList.add("menu-box-text");
    menuText2.innerHTML=`<div id="menuItem2Name" class="menu-box-text-title">`+Menu[2][0]+`</div>`
    +`<div id="menuItem2Description" class="menu-box-text-description">`+Menu[2][1]+`</div>`
    +`<div id="menuItem2Price" class="menu-box-text-price">`+Menu[2][2]+`</div>`
    +`</div>`;
    menuBox2.appendChild(menuPictures2);
    menuBox2.appendChild(menuText2);

    /*3*/
    const menuBox3 = document.createElement('div');
    menuBox3.setAttribute('id','menuItem3');
    menuBox3.classList.add('menu-box');

    const menuPictures3 = new Image();
    menuPictures3.src = MenuPicture3;
    menuPictures3.setAttribute('id','menuItem3Picture');
    menuPictures3.classList.add('menu-box-picture');

    const menuText3 = document.createElement('div');
    menuText3.setAttribute('id','menuItem3Text');
    menuText3.classList.add("menu-box-text");
    menuText3.innerHTML=`<div id="menuItem3Name" class="menu-box-text-title">`+Menu[3][0]+`</div>`
    +`<div id="menuItem3Description" class="menu-box-text-description">`+Menu[3][1]+`</div>`
    +`<div id="menuItem3Price" class="menu-box-text-price">`+Menu[3][2]+`</div>`
    +`</div>`;
    menuBox3.appendChild(menuPictures3);
    menuBox3.appendChild(menuText3);

    /*4*/
    const menuBox4 = document.createElement('div');
    menuBox4.setAttribute('id','menuItem4');
    menuBox4.classList.add('menu-box');

    const menuPictures4 = new Image();
    menuPictures4.src = MenuPicture4;
    menuPictures4.setAttribute('id','menuItem4Picture');
    menuPictures4.classList.add('menu-box-picture');

    const menuText4 = document.createElement('div');
    menuText4.setAttribute('id','menuItem4Text');
    menuText4.classList.add("menu-box-text");
    menuText4.innerHTML=`<div id="menuItem4Name" class="menu-box-text-title">`+Menu[4][0]+`</div>`
    +`<div id="menuItem4Description" class="menu-box-text-description">`+Menu[4][1]+`</div>`
    +`<div id="menuItem4Price" class="menu-box-text-price">`+Menu[4][2]+`</div>`
    +`</div>`;
    menuBox4.appendChild(menuPictures4);
    menuBox4.appendChild(menuText4);

    /*5*/
    const menuBox5 = document.createElement('div');
    menuBox5.setAttribute('id','menuItem5');
    menuBox5.classList.add('menu-box');

    const menuPictures5 = new Image();
    menuPictures5.src = MenuPicture5;
    menuPictures5.setAttribute('id','menuItem5Picture');
    menuPictures5.classList.add('menu-box-picture');

    const menuText5 = document.createElement('div');
    menuText5.setAttribute('id','menuItem5Text');
    menuText5.classList.add("menu-box-text");
    menuText5.innerHTML=`<div id="menuItem5Name" class="menu-box-text-title">`+Menu[5][0]+`</div>`
    +`<div id="menuItem5Description" class="menu-box-text-description">`+Menu[5][1]+`</div>`
    +`<div id="menuItem5Price" class="menu-box-text-price">`+Menu[5][2]+`</div>`
    +`</div>`;
    menuBox5.appendChild(menuPictures5);
    menuBox5.appendChild(menuText5);
    
    element.appendChild(menuBox1);
    element.appendChild(menuBox2);
    element.appendChild(menuBox3);
    element.appendChild(menuBox4);
    element.appendChild(menuBox5);

    



    /* DYNAMIC - no webpack*/
    /*
    const menuItems = [];
    const menuPictures = [];

    for(let i=1; i<Menu.length;i++){
        menuItems[i-1] = document.createElement('div');
        menuItems[i-1].setAttribute('id','menuItem'+i);
        menuItems[i-1].classList.add('menu-box');

        menuItems[i-1].innerHTML = `<div id="menuItem`+i+`Picture" class="menu-box-picture" style="background-image: url('../assets/menu-pictures/`+Menu[i][3]+`'); background-size: cover;"></div>
        <div id="menuItem`+i+`Text" class="menu-box-text">`
        +`<div id="menuItem`+i+`Name" class="menu-box-text-title">`+Menu[i][0]+`</div>`
        +`<div id="menuItem`+i+`Description" class="menu-box-text-description">`+Menu[i][1]+`</div>`
        +`<div id="menuItem`+i+`Price" class="menu-box-text-price">`+Menu[i][2]+`</div>`
        +`</div>`
    
        element.appendChild(menuItems[i-1]);
    }*/

    return element;
}