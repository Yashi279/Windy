const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '269338e69bmsha735f5a89845843p1d7533jsn23c19396029e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) =>{
		console.log(response)
		//cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_degrees.innerHTML = response.wind_degrees
		wind_speed.innerHTML = response.wind_speed
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
	.then(response => response.json())
	.then((response) =>{
		console.log(response)
		lko_cloud_pct.innerHTML = response.cloud_pct
		lko_temp.innerHTML = response.temp
		lko_feels_like.innerHTML = response.feels_like
		lko_humidity.innerHTML = response.humidity
		lko_min_temp.innerHTML = response.min_temp
		lko_max_temp.innerHTML = response.max_temp
		lko_wind_speed.innerHTML = response.wind_speed
		lko_wind_degrees.innerHTML = response.wind_degrees
		lko_sunrise.innerHTML = response.sunrise
		lko_sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
	.then(response => response.json())
	.then((response) =>{
		console.log(response)
		kol_cloud_pct.innerHTML = response.cloud_pct
		kol_temp.innerHTML = response.temp
		kol_feels_like.innerHTML = response.feels_like
		kol_humidity.innerHTML = response.humidity
		kol_min_temp.innerHTML = response.min_temp
		kol_max_temp.innerHTML = response.max_temp
		kol_wind_speed.innerHTML = response.wind_speed
		kol_wind_degrees.innerHTML = response.wind_degrees
		kol_sunrise.innerHTML = response.sunrise
		kol_sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
	.then(response => response.json())
	.then((response) =>{
		console.log(response)
		shan_cloud_pct.innerHTML = response.cloud_pct
		shan_temp.innerHTML = response.temp
		shan_feels_like.innerHTML = response.feels_like
		shan_humidity.innerHTML = response.humidity
		shan_min_temp.innerHTML = response.min_temp
		shan_max_temp.innerHTML = response.max_temp
		shan_wind_speed.innerHTML = response.wind_speed
		shan_wind_degrees.innerHTML = response.wind_degrees
		shan_sunrise.innerHTML = response.sunrise
		shan_sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

	
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Antarctica', options)
	.then(response => response.json())
	.then((response) =>{
		console.log(response)
		an_cloud_pct.innerHTML = response.cloud_pct
		an_temp.innerHTML = response.temp
		an_feels_like.innerHTML = response.feels_like
		an_humidity.innerHTML = response.humidity
		an_min_temp.innerHTML = response.min_temp
		an_max_temp.innerHTML = response.max_temp
		an_wind_speed.innerHTML = response.wind_speed
		an_wind_degrees.innerHTML = response.wind_degrees
		an_sunrise.innerHTML = response.sunrise
		an_sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
