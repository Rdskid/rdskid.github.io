let name = "Soda Springs"

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=759aa1ea97529d151a0df861e831f226';

function windChill(temp, wSpeed) {
  if (temp <= 50 && wSpeed >= 3) {
      let te = temp;
      let ws = wSpeed;
      let windChill = 35.74 + (0.6215 * te) - (35.75 * Math.pow(ws, 0.16)) + (0.4275 * te * Math.pow(ws, 0.16)) + '\xB0 F';

      return windChill;
  }
  else {
      document.getElementById("windChill").textContent = "N/A";
  }
}

function output() {
  let temp = parseFloat(document.getElementById("temp").textContent);
  let wSpeed = parseFloat(document.getElementById("wSpeed").textContent);
  let output = windChill(temp, wSpeed);

  document.getElementById("windChill").textContent = output.toFixed(0);
}

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('temp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wSpeed').textContent = jsObject.wind.speed;

output()

});

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })

    .then(function(jsonObject) {

        const towns = jsonObject['towns'];

        towns.forEach(town => {

            if (town.name == name) {

                var events = document.createElement('section');
                var header = document.createElement('h3')
                var list = document.createElement('ul');
                var eventitems = town.events;

                eventitems.forEach(eventitem => {
                    var li = document.createElement('li');
                    li.textContent = eventitem;
                    list.appendChild(li);
                });

                header.textContent = `Upcoming Events`;

                events.appendChild(header);
                events.appendChild(list);

                document.querySelector('div.events').appendChild(events);
            }
        });
      });
      
      const getURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=759aa1ea97529d151a0df861e831f226';

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
            document.getElementById(`day${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`img${day+1}`).setAttribute('src', imagesrc);
            document.getElementById(`img${day+1}`).setAttribute('alt', desc);
 
            day++;
        });
    });