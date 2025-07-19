const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const description = document.querySelector('#description');
const highTemp = document.querySelector('#high-temp');
const lowTemp = document.querySelector('#low-temp');
const humedity = document.querySelector('#humidity');
const sunRise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');
const today = document.querySelector('#today');
const dayTwo = document.querySelector('#day-two');
const dayThree = document.querySelector('#day-three');

const lat = "9.929";
const lon = "-84.183";

const ApiKey = '594cac8358079f4174df186c18017157';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${ApiKey}`;

const forecastURL =`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${ApiKey}`;

async function apiCurrentFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

async function apiForestFetch() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResultsForest(data);
        }
        else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    description.innerHTML = data.weather[0].description;
    highTemp.innerHTML = `High: ${data.main.temp_max}&deg;F`;
    lowTemp.innerHTML = `${data.main.temp_min}&deg;F`;
    humedity.innerHTML = `${data.main.humidity}%`;
    sunRise.innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    sunset.innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', description);

}

function displayResultsForest(data) {
  const dailyForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00"));

  const options = { weekday: 'long' };

  today.innerHTML = `Today (${new Date(dailyForecasts[0].dt_txt).toLocaleDateString('en-CR', options)}): ${dailyForecasts[0].main.temp}&deg;F`;

  dayTwo.innerHTML = `${new Date(dailyForecasts[1].dt_txt).toLocaleDateString('en-CR', options)}: ${dailyForecasts[1].main.temp}&deg;F`;

  dayThree.innerHTML = `${new Date(dailyForecasts[2].dt_txt).toLocaleDateString('en-CR', options)}: ${dailyForecasts[2].main.temp}&deg;F`;
}

apiCurrentFetch();
apiForestFetch();