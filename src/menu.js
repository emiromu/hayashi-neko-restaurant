import Menu from '../data/menu.csv';

export default function componentMenu() {

    const element = document.createElement('div');
    element.innerHTML = 'menu' + '<br/>';
    console.log(Menu);

    return element;
}