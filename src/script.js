let button = document.getElementById("btn"); //Button
let input = document.getElementById("input"); //Input

//description elements
let temp = document.getElementById("temp");
let min_temp = document.getElementById("min_temp");
let max_temp = document.getElementById("max_temp");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let name = document.getElementById("name");
let desc = document.getElementById("desc");
let city_name = document.getElementById("city_name");

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=75fbec827ddb69342c88983b8d1826b5&units=imperial"
  )
    .then((response) => response.json())
    .then((data) => {
      let nameValue = data["name"];
      let tempValue = data["main"]["temp"];
      let min_tempValue = data["main"]["temp_min"];
      let max_tempValue = data["main"]["temp_max"];
      let descValue = data["weather"][0]["description"];
      let humidityValue = data["main"]["humidity"];
      let pressureValue = data["main"]["pressure"];

      city_name.innerText = nameValue;
      temp.innerText = tempValue;
      min_temp.innerText = min_tempValue;
      max_temp.innerText = max_tempValue;
      desc.innerText = descValue;
      humidity.innerText = humidityValue;
      pressure.innerText = pressureValue;
    });
});
