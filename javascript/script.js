
  const weatherConditions = [
    "Sunny, 20°C",
    "Partly Cloudy, 18°C",
    "Cloudy, 15°C",
    "Rainy, 12°C",
    "Windy, 14°C",
    "Stormy, 10°C"
  ];
  function updateWeather() {
    const weatherElement = document.getElementById('weather');
    const randomCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    weatherElement.textContent = randomCondition;
  }
  setInterval(updateWeather, 6000);
  updateWeather();

  function description(desc, p) {
    if (p == 1) {
      document.getElementById("1").textContent = desc
    }
    if (p == 2) {
      document.getElementById("2").textContent = desc
    }
    if (p == 3) {
      document.getElementById("3").textContent = desc
    }
  }

  document.getElementById('show-video-btn').onclick = function() {
    document.getElementById('video-modal').style.display = 'flex';
  };
  document.getElementById('video-modal-btn').onclick = function() {
    document.getElementById('video-modal').style.display = 'none';
  };

