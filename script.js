let app
document.addEventListener('DOMContentLoaded', () => {
    app = new AppStart();
    document.getElementById("submit").addEventListener("click", ()=> {app.pushToArray()})
    document.getElementById("submit").addEventListener("click", app.weatherCheck)
})
function AppStart() {
    this.miejscowosci = [];
    this.pushToArray = function () {    
        const podanaMiejsc = document.querySelector("#podajMiejsc").value;
        this.miejscowosci.push(podanaMiejsc);
        console.log(this.miejscowosci)
    }
    this.weatherCheck = function () {
        const podanaMiejsc = document.querySelector("#podajMiejsc").value;
        const opwApiKey = '50d53005c0fd5f556bb4ef15224c4209'
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${podanaMiejsc}&APPID=${opwApiKey}`
        const weather = fetch(openWeatherUrl)
        console.log(weather);
        weather
            .then((retVal) => { console.log('First .then', retVal); return retVal.json() })
            .then(retVal => {
                console.log('Second .then', retVal)
                document.getElementById("pogoda").innerHTML = retVal.weather["0"].description
            })
            .catch((e) => { console.error('Catched exception: ', e) })
        let stringMiasta = JSON.stringify(this.miejscowosci);
        localStorage.setItem('miasta', stringMiasta);
    }

}


    //localStorage.getItem('miasta', 