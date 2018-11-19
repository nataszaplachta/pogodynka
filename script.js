    document.addEventListener('DoMContentLoaded', appStart)
    function appStart(){
    }
    
    document.getElementById("submit").addEventListener("click", weatherCheck)
    function saveMiejsc() {
        const miejsc = document.getElementById("podajMiejsc");
    }

    function weatherCheck() {
    const podanaMiejsc = document.getElementById("podajMiejsc").value;
    const opwApiKey = '50d53005c0fd5f556bb4ef15224c4209'
    const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${podanaMiejsc}&APPID=${opwApiKey}`
    const weather = fetch(openWeatherUrl)
        console.log(weather);
    weather
            .then((retVal)=>{console.log('First .then',retVal); return retVal.json()}) 
            .then(retVal=>{console.log('Second .then',retVal)})
            .catch((e)=>{console.error('Catched exception: ', e)})
      document.getElementById("pogoda").innerHTML = weather;
      }
      const stringMiasta = podanaMiejsc.json.stringify
    localStorage.setItem('miasta',);
    localStorage.getItem(miejsca)