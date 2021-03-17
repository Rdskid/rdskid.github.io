
const getURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=9e82453a440594b3cdfb2221e87e0b94';

fetch(getURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        let day = 0;
        fivedayforecast.forEach(forecast => {
            let d = new Date(forecast.dt_txt);
            const imagesrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
            const desc = forecast.weather[0].description;
            
            document.getElementById(`forecast${day+1}`).textContent = Math.round(forecast.main.temp);
            document.getElementById(`img${day+1}`).setAttribute('src', imagesrc);
            document.getElementById(`img${day+1}`).setAttribute('alt', desc);
 
            day++;
        });
    });