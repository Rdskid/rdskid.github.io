const apiURL = 'http://api.openweathermap.org/data/2.5/weather?lat=41.0895938&lon=-112.0638903&appid=5f964e29789534a7d3f306e1a0e67c70&units=imeprial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        document.getElementById('current').textContent = jsObject.weather[0].main;
        document.getElementById('temp').textContent = Math.round(jsObject.main.temp);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
    }); 


    const apiforecastURL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=5f964e29789534a7d3f306e1a0e67c70&units=imperial';
    
    fetch(apiforecastURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const threedayforecast = jsObject.list.filter(x => x.dt_txt.includes('12:00:00'));

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        let day = 0;
        threedayforecast.forEach(screenforecast => {
          let d = new Date(screenforecast.dt_txt);
          document.getElementById(`forecast${day+1}`).textContent = Math.round(screenforecast.main.temp);
          document.getElementById(`dayoftheweek${day+1}`).textContent = weekdays[d.getDay()];

          const imagesrc = 'https://openweathermap.org/img/wn/' + screenforecast.weather[0].icon + '.png';


          const desc = screenforecast.weather[0].description;
          document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
          document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
          
    
          day++;
        })

      });