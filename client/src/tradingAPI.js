// var charting = require ('./charting');


var urlBuilder = function(ticker){
    console.log("urlBuilder");
    var url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+ticker+"&interval=Daily&apikey=3NGTF0MQ8KR7N3PJ";
    console.log(url);
    return url;
};


function tradingAPI(ticker){

    if (window.Promise) {
        console.log('Promise found');

        // var promise = new Promise(function (resolve, reject) {
        return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();


            request.open('GET', urlBuilder(ticker));
            request.onload = function () {
                if (request.status == 200) {
                    resolve(request.response); // we got data here, so resolve the Promise
                } else {
                    reject(Error(request.statusText)); // status is not 200 OK, so reject
                }
            };

            request.onerror = function () {
                reject(Error('Error fetching data.')); // error occurred, reject the  Promise
            };

            request.send(); //send the request
        });
            console.log('Asynchronous request made.');

        }else {
            console.log('Promise not available');
        }


    }

module.exports = tradingAPI;