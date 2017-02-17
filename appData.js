var APPID = "b83cfc294c2330f1299f03d8988d3162";
var url ="http://api.openweathermap.org/data/2.5/weather?q=";

var miasto = $("#town");
$("#search").click(szukajMiasta);

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
            $("#pic").append("<img src='http://openweathermap.org/img/w/01d.png'</img>");
    } else if (mias.weather[0].icon === "01n") {
            $("#pic").append("<img src='http://openweathermap.org/img/w/01n.png'</img>");
    } else if (mias.weather[0].icon === "02d") {
            $("#pic").append("<img src='http://openweathermap.org/img/w/02d.png'</img>");
    } else if (mias.weather[0].icon === "02n") {
            $("#pic").append("<img src='http://openweathermap.org/img/w/02n.png'</img>");
    } else if (mias.weather[0].icon === "03d") {
            $("#pic").append("<img src='http://openweathermap.org/img/w/03d.png'</img>");
    } else if (mias.weather[0].icon === "03n") {
            $("#pic").append("<img src='http://openweathermap.org/img/w/03n.png'</img>");
    } else if (mias.weather[0].icon === "04d") {
            $("#pic").append("<img src='http://openweathermap.org/img/w/04d.png'</img>");
    } else if (mias.weather[0].icon === "04n") {
            $("#pic").append("<img src='http://openweathermap.org/img/w/04n.png'</img>");
    } else if (mias.weather[0].icon === "09d") {
            $("#pic").append("<img src='http://openweathermap.org/img/w/09d.png'</img>");
    } else if (mias.weather[0].icon === "09n") {
            $("#pic").append("<img src='http://openweathermap.org/img/w/09n.png'</img>");
    } else if (mias.weather[0].icon === "10d") {
            $("#pic").append("<img src='http://openweathermap.org/img/w/10d.png'</img>");
    } else if (mias.weather[0].icon === "10n") {
            $("#pic").append("<img src='http://openweathermap.org/img/w/10n.png'</img>");
    } else if (mias.weather[0].icon === "11d") {
            $("#pic").append("<img src='http://openweathermap.org/img/w/11d.png'</img>");
    } else if (mias.weather[0].icon === "11n") {
            $("#pic").append("<img src='http://openweathermap.org/img/w/11n.png'</img>");
    } else if (mias.weather[0].icon === "13d") {
            $("#pic").append("<img src='http://openweathermap.org/img/w/13d.png'</img>");
    } else if (mias.weather[0].icon === "13n") {
            $("#pic").append("<img src='http://openweathermap.org/img/w/13n.png'</img>");
    } else if (mias.weather[0].icon === "50d") {
            $("#pic").append("<img src='http://openweathermap.org/img/w/50d.png'</img>");
    } else if (mias.weather[0].icon === "50n") {
            $("#pic").append("<img src='http://openweathermap.org/img/w/50n.png'</img>");
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
