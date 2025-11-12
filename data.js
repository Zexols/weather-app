const API_KEY = "2d08d0ec6f407260e65ff18f9fbc3bca"
async function getWeather(){
  const city = document.getElementById("city").value.trim();
  const out = document.getElementById("out");
  if(!city) return;
  if(out !== "active"){
    out.classList.remove("active")
  }
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
  const data = await res.json();
  if(data.cod !== 200) return out.innerText = "City not found";
  out.innerHTML = `
    <h3 class ="City">${data.name}</h3>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
    <div class = "temp"> ${data.main.temp}°C</div>
    <div class = "wind">💨 ${data.wind.speed} m/s</div>
    <div class = "clouds">💧 ${data.clouds.all}% clouds</div>
    <div class = "desc">${data.weather[0].description}</div>
  `;
  out.classList.add("active");
}