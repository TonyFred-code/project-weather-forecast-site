import './style.css';
import { intlFormat } from 'date-fns/intlFormat';
import loadIcons from './loadIcon';
import getImg from './currentWeatherIcon';

const form = document.querySelector('form');
const dayWeather = document.querySelector('.day-weather-container');
const loadingScreen = document.querySelector('.loading-screen');
const errorScreen = document.querySelector('.error-screen');
const offlineScreen = document.querySelector('.offline-screen');

function hideOfflineScreen() {
  offlineScreen.classList.add('hide');
  offlineScreen.classList.remove('show');
}

function showOfflineScreen() {
  offlineScreen.classList.add('show');
  offlineScreen.classList.remove('hide');
}

function hideErrorScreen() {
  errorScreen.classList.add('hide');
  errorScreen.classList.remove('show');
}

function showErrorScreen() {
  errorScreen.classList.add('show');
  errorScreen.classList.remove('hide');
}

function showLoadingScreen() {
  loadingScreen.classList.add('show');
  loadingScreen.classList.remove('hide');
}

function hideLoadingScreen() {
  loadingScreen.classList.remove('show');
  loadingScreen.classList.add('hide');
}

function showCityDataScreen() {
  dayWeather.classList.add('show');
  dayWeather.classList.remove('hide');
}

function hideCityDataScreen() {
  dayWeather.classList.add('hide');
  dayWeather.classList.remove('show');
}

function getWeatherImg(srcString) {
  const temp = srcString.split('/');
  const [, , , , , nightDay, location] = temp;
  let imgCode = location.split('.')[0];
  if (nightDay.toLowerCase() === 'night') {
    imgCode += `Night`;
  } else {
    imgCode += `Day`;
  }

  const img = getImg(imgCode);

  return img;
}

function renderCityData(cityData) {
  const cityNameContainer = document.querySelector('.city-name');
  cityNameContainer.textContent = `${cityData.location.name}, ${cityData.location.country}`;

  const [date, time] = cityData.location.localtime.split(' ');

  const timeContainer = document.querySelector('.time');
  timeContainer.textContent = time;

  const dateContainer = document.querySelector('.date');
  dateContainer.textContent = intlFormat(new Date(date), {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const weatherIconContainer = document.querySelector(
    '.weather-icon.icon-container'
  );
  weatherIconContainer.textContent = '';
  const weatherImg = getWeatherImg(cityData.current.condition.icon);
  if (weatherImg === null) {
    return; // display some default img
  }
  weatherIconContainer.appendChild(weatherImg);

  const currentTempContainer = document.querySelector('.current-temp');
  currentTempContainer.innerHTML = `${cityData.current.temp_c}&deg;c`;

  const highLowTempContainer = document.querySelector('.high-low');
  highLowTempContainer.innerHTML = `H: ${cityData.forecast.forecastday[0].day.maxtemp_c}&deg;c&nbsp;&nbsp; L: ${cityData.forecast.forecastday[0].day.mintemp_c}&deg;c`;

  const conditionTextContainer = document.querySelector('.condition');
  conditionTextContainer.textContent = cityData.current.condition.text;

  const feelsLikeContainer = document.querySelector('.feels-like-temp');
  feelsLikeContainer.innerHTML = `${cityData.current.feelslike_c}&deg;c`;

  const humidityContainer = document.querySelector('.humidity-percentage');
  humidityContainer.textContent = `${cityData.current.humidity}%`;

  const rainProbContainer = document.querySelector('.rain-probability-value');
  rainProbContainer.textContent = `${cityData.forecast.forecastday[0].day.daily_will_it_rain}%`;

  const windSpeedContainer = document.querySelector('.wind-speed-value');
  windSpeedContainer.textContent = `${cityData.current.wind_mph} m/s`;

  const uvIndexContainer = document.querySelector('.uv-index-value');
  uvIndexContainer.textContent = cityData.current.uv;
}

function printCityData(cityData) {
  console.log(cityData);
  hideOfflineScreen();
  if ('location' in cityData) {
    console.log('getting location');
    renderCityData(cityData);
    showCityDataScreen();
    hideErrorScreen();
  } else if ('error' in cityData) {
    if (cityData.error.code === 1006) {
      const locationNotFound = document.querySelector('.location-not-found');
      locationNotFound.classList.remove('hide');
      locationNotFound.classList.add('show');
    } else {
      const errorMsg = document.querySelector('.error-message');
      errorMsg.textContent = cityData.error.message;
      errorMsg.classList.add('show');
      errorMsg.classList.remove('hide');
    }

    hideCityDataScreen();
    showErrorScreen();
  }

  setTimeout(() => {
    hideLoadingScreen();
  }, 800);
}

function fetchCityWeatherData(cityName = 'Lagos') {
  // const sampleURL = `./data/forecast-data.json`;
  const actualURL = `https://api.weatherapi.com/v1/forecast.json?key=871ceab34975437482c100138230112&q=${cityName}&days=3&api=yes`;
  fetch(actualURL, { mode: 'cors' })
    // fetch(sampleURL)
    .then((response) => response.json())
    .then((response) => {
      printCityData(response);
      console.log(cityName);
    })
    .catch((error) => {
      console.error(error);
      hideCityDataScreen();
      hideLoadingScreen();
      if (!navigator.onLine) {
        console.log('You are offline');
        showOfflineScreen();
      } else {
        showErrorScreen();
      }
    });
}

fetchCityWeatherData();

const cityNameInput = form.elements.q;

cityNameInput.addEventListener('input', () => {
  const { value } = cityNameInput;
  console.log(value);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const cityName = cityNameInput.value;

  hideErrorScreen();
  hideCityDataScreen();
  hideOfflineScreen();
  showLoadingScreen();
  fetchCityWeatherData(cityName);
});

loadIcons();
