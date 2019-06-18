window.addEventListener('load' ()=> {
  let long;
  let lat;
  let temperatureDescription = document.querySelector('.temperature-description');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let temperatureTimezone = document.querySelector('.temperature-timezone');

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
          const { temperature, summary } = data.currently;


        })
    });
  }
});
