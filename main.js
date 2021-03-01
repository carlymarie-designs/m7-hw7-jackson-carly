var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here
        function showWeather(){


          // print the city name
          const headerOne = document.querySelector( 'header h1 span' );
          headerOne.innerHTML += " " + apiResult.name;

          // print the weather description
          const description = document.querySelector( 'main h2 span' );
          description.innerHTML += " " + apiResult.weather[0].description;
          
          // read results
          console.log(apiResult);

        }

        showWeather();

    }
};

xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=33610,us&appid=6efff70fe1477748e31c17d1c504635f', true);

xmlhttp.send();
