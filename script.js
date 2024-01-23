javascript
function getWeather() {
    const location = document.getElementById('location').value;
    const apiKey = 'ea5a8534a6a541dc9ca123508242201';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Handle the data and update the DOM
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `<p>${data.location.name}, ${data.location.country}</p>
                                     <p>Temperature: ${data.current.temp_c}°C</p>
                                     <p>Condition: ${data.current.condition.text}</p>`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
    }
