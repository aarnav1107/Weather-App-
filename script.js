const button = document.querySelector('#search-button');
const input = document.querySelector('#city-input');
const cityName = document.querySelector('#city-name');
const cityTemp = document.querySelector('#city-temp');
const cityTime = document.querySelector('#city-time');
async function getWeather(city) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=611a2d322546468cb5750102242205&q=${city}&aqi=yes`);
    // const data = await response.json();
    // console.log(data);

return await response.json();
}



button.addEventListener('click',async () => {
    //console.log(input.value);
    const value = input.value;
    const result=await getWeather(value);
   // console.log(result);
   cityName.innerText = `${result.location.name},${result.location.region}-${result.location.country}`
    cityTemp.innerText = `${result.current.temp_c}°C`
    cityTime.innerText = `${result.location.localtime}`
    document.getElementById('icon').src = data.current.condition.icon;

//http://api.weatherapi.com/v1/current.json?key=611a2d322546468cb5750102242205&q=London&aqi=yes 

});
