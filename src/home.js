import OutsidePicture from '../assets/restaurant.png';

export default function componentHome() {
    
    const element = document.createElement('div');
    element.classList.add('container-vertical');
    element.innerHTML = `<h2 style="margin-top: 1em; margin-bottom: 1em;">Hayashi Neko Restaurant</h2>`;

    const homePicture = new Image();
    homePicture.src = OutsidePicture;
    homePicture.classList.add('home-picture');
    element.appendChild(homePicture);

    const introduction = document.createElement('div');
    introduction.classList.add('core-text');
    introduction.innerHTML =`Hayashi Neko (established since 2006) is a maNYAficient restaurant specialised in hayashi rice (ハヤシライス). This is a family-owned business, the family being emiromu and his black cats.
    Our secret recipe is very tasty, much delicious. Please check out our menu page for the full list of delicacies offered.`;

    element.appendChild(introduction);

    return element;
}