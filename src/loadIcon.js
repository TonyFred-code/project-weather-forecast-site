import headerLogoSrc from './icons/logo.svg';

import createImg from './createImg';

export default function loadIcons() {
    const headerIcon = document.querySelector('.icon-container.header-logo');
    const headerImg = createImg(headerLogoSrc, 'Weather App Logo');

    headerIcon.appendChild(headerImg);
}