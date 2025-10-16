export async function getAirQuality(lat, lon) {
  // TODO: Replace YOUR_KEY with actual OpenWeatherMap API key
  const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=YOUR_KEY`);
  const data = await response.json();
  return data.list[0].main.aqi;
}
