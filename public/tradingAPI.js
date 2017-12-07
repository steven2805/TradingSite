// var Companyseeds = require('./companyseeds');




var makeRequest = function(url, callback){
    var request = new XMLHttpRequest();
    request.addEventListener('load',callback);
    request.open('GET',url);
    request.send();
}

var requestComplete = function(){
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var stock = JSON.parse(jsonString);
    console.log(stock);
}

window.onload = function () {


    var url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=ea&interval=Daily&apikey=3NGTF0MQ8KR7N3PJ";

    makeRequest(url, requestComplete);
}


