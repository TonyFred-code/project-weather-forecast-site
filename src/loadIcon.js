import headerLogoSrc from './icons/logo.svg';
import humidityIconSrc from './icons/raindrop.svg';
import thermometerIconSrc from './icons/thermometer.svg';
import rainProbIconSrc from './icons/rain.svg';
import windSpeedIconSrc from './icons/wind.svg';
import uvIndexIconSrc from './icons/uv-index.svg';

import createImg from './createImg';

export default function loadIcons() {
  const headerIcon = document.querySelector('.icon-container.header-logo');
  const headerImg = createImg(headerLogoSrc, 'Weather App Logo');

  const humidityIcon = document.querySelector('.icon-container.humidity-icon');
  const humidityImg = createImg(humidityIconSrc, 'Humidity Icon');

  const thermometerIcon = document.querySelector('.icon-container.temp-icon');
  const thermometerImg = createImg(thermometerIconSrc, 'Humidity Icon');

  const rainProbIcon = document.querySelector('.icon-container.rain-prob-icon');
  const rainProbImg = createImg(rainProbIconSrc, 'Rain Probability Icon');

  const windSpeedIcon = document.querySelector(
    '.icon-container.wind-speed-icon'
  );
  const windSpeedImg = createImg(windSpeedIconSrc, 'Wind Speed Icon');

  const uvIndexIcon = document.querySelector('.icon-container.uv-index-icon');
  const uvIndexImg = createImg(uvIndexIconSrc, 'Humidity Icon');

  // const thermometerIcon = document.querySelector(".icon-container.temp-icon");
  // const thermometerImg = createImg(thermometerIconSrc, 'Humidity Icon');

  headerIcon.appendChild(headerImg);
  humidityIcon.appendChild(humidityImg);
  thermometerIcon.appendChild(thermometerImg);
  rainProbIcon.appendChild(rainProbImg);
  windSpeedIcon.appendChild(windSpeedImg);
  uvIndexIcon.appendChild(uvIndexImg);
}
