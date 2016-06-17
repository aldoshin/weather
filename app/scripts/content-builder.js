'use strict';

const getContent = (response) => {
    let current = response.weather[0];
    return `
    <div class="weather">
  		<h2>CURRENT CONDITIONS FOR</h1>
  		<h3>${response.name}</h3>
  		<h3>${response.main.temp} &deg;F</h3>
  		<img class="weather-icon" src="http://openweathermap.org/img/w/${current.icon}.png" alt="wheater Image" />
  		<h3 id="description">${current.description}</h3>
  	</div>
  `;
};

export default {
  getContent
};
