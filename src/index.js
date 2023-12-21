

function printCityData(cityData) {
  console.log(cityData);
  if ('location' in cityData) {
    console.log('getting location');
  } else if ('error' in cityData) {
    console.log('getting error');
  }
}

function fetchCityWeatherData(cityName = 'Lagos') {
    const sampleURL = `./data/forecast-data.json`;
    // const actualURL = `https://api.weatherapi.com/v1/forecast.json?key=871ceab34975437482c100138230112&q=${cityName}&days=3&api=yes`
//   fetch(
//     actualURL,
//     { mode: 'cors' }
//   )
    fetch(sampleURL)
    .then((response) => response.json())
    .then((response) => {
      printCityData(response);
      console.log(cityName);
    });
}

fetchCityWeatherData();

// printCityData();