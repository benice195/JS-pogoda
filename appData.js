var APPID = "b83cfc294c2330f1299f03d8988d3162";
var url ="http://api.openweathermap.org/data/2.5/weather?q=";

var miasto = $("#town");
$("#search").click(szukajMiasta);
$("#nazwa-miasta").keypress( function(e) {
        if(e.which === 13) {
                szukajMiasta();
        };
});

function szukajMiasta() {
    var nazwaMiasta = $("#nazwa-miasta").val();
    if (!nazwaMiasta.length) nazwaMiasta = "Warszawa";
    $.ajax({
        url: url + nazwaMiasta + "&APPID=" + APPID + "&units=metric",
        method: 'GET',
        success: pokazMiasto
    });
};

function pokazMiasto(resp) {
    var mias = resp;
    miasto.empty();
    $("#town").append("<li id='top'>Warunki pogodowe: </li>")
    $("#town").append("<li id='nazwa'>" + mias.name + "</li>");
    $("#town").append("<div id='info'></div>");
    $("#town").append("<div id='pic'></div>");
    $("#info").append("<li class='wartosc'>" + "Obecnie mamy: </li>" + "<li class='prawa'>" + Math.round(mias.main.temp) + " st. C" + "</li>");
    $("#info").append("<li class='wartosc'>" + "Ciśnienie: </li>" + "<li class='prawa'>" + mias.main.pressure + " hPa" + "</li>");
    $("#info").append("<li class='wartosc'>" + "Wilgotność: </li>" + "<li class='prawa'>" + mias.main.humidity + " %" + "</li>");
    $("#info").append("<li class='wartosc'>" + "Prędkość wiatru: </li>" + "<li class='prawa'>" + mias.wind.speed + " m/s" + "</li>");
    $("#info").append("<li class='wartosc'>" + "Zachmurzenie: </li>" + "<li class='prawa'>" + mias.clouds.all + " %" + "</li>");

    if (mias.weather[0].description === "clear sky") {
        $("#info").append("<li class='wartosc'>" + "Widoczność: </li>" + "<li class='prawa'> Czyste niebo </li>");
    } else if (mias.weather[0].description === "few clouds") {
        $("#info").append("<li class='wartosc'>" + "Widoczność: </li>" + "<li class='prawa'> Lekkie zachmurzenie </li>");
    } else if (mias.weather[0].description === "scattered clouds") {
        $("#info").append("<li class='wartosc'>" + "Widoczność: </li>" + "<li class='prawa'> Rozproszone chmury </li>");
    } else if (mias.weather[0].description === "broken clouds") {
        $("#info").append("<li class='wartosc'>" + "Widoczność:</li>" + "<li class='prawa'> Przerywane chmury </li>");
    } else if (mias.weather[0].description === "shower rain") {
        $("#info").append("<li class='wartosc'>" + "Widoczność:</li>" + "<li class='prawa'> Ulewa </li>");
    } else if (mias.weather[0].description === "light rain") {
        $("#info").append("<li class='wartosc'>" + "Widoczność:</li>" + "<li class='prawa'> Deszcz </li>");
    } else if (mias.weather[0].description === "thunderstorm") {
        $("#info").append("<li class='wartosc'>" + "Widoczność:</li>" + "<li class='prawa'> Burza z piorunami </li>");
    } else if (mias.weather[0].description === "snow") {
        $("#info").append("<li class='wartosc'>" + "Widoczność:</li>" + "<li class='prawa'> Śnieg </li>");
    } else if (mias.weather[0].description === "mist") {
        $("#info").append("<li class='wartosc'>" + "Widoczność:</li>" + "<li class='prawa'> Mgła </li>");
    }; 


    if (mias.weather[0].icon === "01d") {
            $("#pic").append("<img src='png/sun.png'></img>");
            $("body").css('background-image', 'url("background/pogodnydzien.jpg")');
    } else if (mias.weather[0].icon === "01n") {
            $("#pic").append("<img src='png/moon.png'></img>");
            $("body").css('background-image', 'url("background/pogodnanoc.jpg")');
    } else if (mias.weather[0].icon === "02d") {
            $("#pic").append("<img src='png/suncloud.png'></img>");
            $("body").css('background-image', 'url("background/lekkozachmurzonydzien.jpg")');
    } else if (mias.weather[0].icon === "02n") {
            $("#pic").append("<img src='png/mooncloud.png'></img>");
            $("body").css('background-image', 'url("background/lekkozachmurzonanoc1.jpg")');
    } else if (mias.weather[0].icon === "03d") {
            $("#pic").append("<img src='png/cloud.png'></img>");
            $("body").css('background-image', 'url("background/lekkozachmurzonydzien.jpg")');
    } else if (mias.weather[0].icon === "03n") {
            $("#pic").append("<img src='png/cloud.png'></img>");
            $("body").css('background-image', 'url("background/zachmurzonanoc.jpg")');
    } else if (mias.weather[0].icon === "04d") {
            $("#pic").append("<img src='png/cloudy.png'></img>");
            $("body").css('background-image', 'url("background/zachmurzonydzien.jpg")');
    } else if (mias.weather[0].icon === "04n") {
            $("#pic").append("<img src='png/cloudy.png'></img>");
            $("body").css('background-image', 'url("background/zachmurzonanoc.jpg")');
    } else if (mias.weather[0].icon === "09d") {
            $("#pic").append("<img src='png/rain.png'></img>");
            $("body").css('background-image', 'url("background/dziendeszcz.jpg")');
    } else if (mias.weather[0].icon === "09n") {
            $("#pic").append("<img src='png/rain.png'></img>");
            $("body").css('background-image', 'url("background/nocdeszcz.jpg")');
    } else if (mias.weather[0].icon === "10d") {
            $("#pic").append("<img src='png/sunrain.png'></img>");
            $("body").css('background-image', 'url("background/dziendeszcz.jpg")');
    } else if (mias.weather[0].icon === "10n") {
            $("#pic").append("<img src='png/moonrain.png'></img>");
            $("body").css('background-image', 'url("background/nocdeszcz.jpg")');
    } else if (mias.weather[0].icon === "11d") {
            $("#pic").append("<img src='png/dark.png'></img>");
            $("body").css('background-image', 'url("background/dzienburza.jpg")');
    } else if (mias.weather[0].icon === "11n") {
            $("#pic").append("<img src='png/dark.png'></img>");
            $("body").css('background-image', 'url("background/nocburza.jpg")');
    } else if (mias.weather[0].icon === "13d") {
            $("#pic").append("<img src='png/snow.png'></img>");
            $("body").css('background-image', 'url("background/dziensnieg.jpg")');
    } else if (mias.weather[0].icon === "13n") {
            $("#pic").append("<img src='png/snow.png'></img>");
            $("body").css('background-image', 'url("background/nocsnieg.jpg")');
    } else if (mias.weather[0].icon === "50d") {
            $("#pic").append("<img src='png/mist.png'></img>");
            $("body").css('background-image', 'url("background/dzienmgla.jpg")');
    } else if (mias.weather[0].icon === "50n") {
            $("#pic").append("<img src='png/mist.png'></img>");
            $("body").css('background-image', 'url("background/nocmgla.jpg")');
    };

    data();

    function data() {
        var data = new Date();
        var godzina = data.getHours();
        if (godzina < 10) {
            godzina = "0" + godzina;
        }
        var minuta = data.getMinutes();
        if (minuta < 10) {
            minuta = "0" + minuta;
        }
        var sekunda = + data.getSeconds();
        if (sekunda <10) {
            sekunda = "0" + sekunda;
        }
        $("#town").append("<div id='zegarek'><li class='zegar'>Prognoza na godzinę: " + godzina + ":" + minuta + ":" + sekunda + "</li></div>")

    };
       

}
