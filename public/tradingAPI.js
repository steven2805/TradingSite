// var Companies = require('./companyseeds');


var makeRequest = function(url, callback){
    var request = new XMLHttpRequest();
    request.addEventListener('load',callback);
    request.open('GET',url);
    request.send();
}

var urlBuilder = function(ticker){
    console.log("urlBuilder");
    var url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+ticker+"&interval=Daily&apikey=3NGTF0MQ8KR7N3PJ";
    console.log(url);
    return url;
}

var requestComplete = function(){
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var stock = JSON.parse(jsonString);
    console.log(stock);
}


window.addEventListener("load",function(event){
    var companies = new Companies();

    console.log(companies.listing);

    console.log("testing");
    var resultURL = urlBuilder("ea");
    makeRequest(resultURL,requestComplete)
});

