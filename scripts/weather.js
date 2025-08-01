const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const ApiKey = '594cac8358079f4174df186c18017157';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.79&lon=6.63&units=imperial&appid=${ApiKey}`;

async function apiFetch() {
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

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;

 
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  let desc = data.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);

  captionDesc.textContent = `${desc}`;
}


apiFetch();

