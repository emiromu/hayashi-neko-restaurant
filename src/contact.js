import ProfilePicture from '../assets/emiromu.png';

export default function componentContact() {

    const element = document.createElement('div');
    element.classList.add('container-vertical');
    element.innerHTML = `<h2 style="margin-top: 1em; margin-bottom: 1em;">Contact</h2>`;

    const contactPicture = new Image();
    contactPicture.src = ProfilePicture;
    contactPicture.classList.add('contact-picture');
    element.appendChild(contactPicture);

    const introduction = document.createElement('div');
    introduction.classList.add('core-text');
    introduction.innerHTML =`<h3 style="margin-top: 0em; margin-bottom: 0em;">Emilien Romulus</h3><br>github : <a href="https://github.com/emiromu">https://github.com/emiromu</a><br><br>email : emilien.romulus@tuta.io<br>`;

    element.appendChild(introduction);

    return element;
}