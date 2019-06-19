window.addEventListener('load' ()=> {
  let long;
  let lat;

  //defining the variables//
  const temperatureDescription = document.querySelector('.temperature-description');
  const temperatureDegree = document.querySelector('.temperature-degree');
  const temperatureTimezone = document.querySelector('.temperature-timezone');
  const temperatureSelection = document.querySelector('.temperature')
  ;
  const temperatureSpan = document.querySelector('temperature span');

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy ="https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/542f87346de4ffd5d5d143cdfd31482e/${lat},${long}`;

      // get request //
      fetch(api)
        .then(response =>{
          return response.json();
        })
        .then(data =>{
          console.log(data);
          const { temperature, summary, icon } = data.currently;
          //Set DOM Elements from the API//
          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = summary;
          locationTimezone.textContent = data.timezone;
            //Formula for Celsius//
            let  celsius = (temperature - 32) * (5 / 9);
            //Set Icon//
            setIcons(icon, document.querySelector('.icon'))
            //Change temperature to Celsius/Farenheit//
              temperatureSection.addEventListener('click', () =>{
                if(temperatureSpan.textContent === "F") {
                  temperatureSpan.textContent = "C";
                  //Showing the conversion//
                  temperatureDegree.textContent = Math.floor(celsius);
                } else {
                  temperatureSpan.textContent = "F";
                  temperatureDegree.textContent = temperature;
                }
              });
        })
    });
  }

  //define the function//
  function (setIcon, iconID){
    const skycons = new Skycons ({color: "white"});
    //Finds the line to replace it with an underscore//
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }
});
