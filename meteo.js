function displayweather(response) {
  let temperature = document.querySelector("#temperature");
  let temp = response.data.temperature.current;
  let city = document.querySelector("#city");
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind");
  let time = document.querySelector("#current-date");
  let date = new Date(response.data.time * 1000);
 console.log(response.data);

  city.innerHTML = response.data.city;
  time.innerHTML = formatDate(date);
  description.innerHTML = response.data.condition.description;
  humidity.innerHTML = response.data.temperature.humidity;
  windSpeed.innerHTML = response.data.wind.speed;
  temperature.innerHTML = Math.round(temp);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

function City(city){
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayweather);
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-form-input");
  City(searchInputElement.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
