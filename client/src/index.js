var Companies = require("./companyseeds.js");
var tradingAPI = require("./tradingAPI");
// var charting = require("./charting");


// TODO change li to buttons and change ul to Div

populateList = function(){
    console.log('this is the populate list');
    var companies = new Companies('null');
    console.log(companies);
    var ul = document.getElementById('CompanyName');
    for(var i in companies.listing){
        var li = document.createElement('button');
        li.innerText = i;
        li.setAttribute('id', companies.listing[i]);
        ul.appendChild(li);
    }
    createListeners();

};

createListeners = function(){
    var element = document.querySelectorAll('button');
    console.log(element);
    for( var i = 0; i<element.length; i ++){
        console.log(i);
        element[i].addEventListener("click", function(event){
            console.log(event.target.id);
            apiRequesting(event.target.id);
            // testAPI(event.target.id);
        })
    }

};

apiRequesting = function(ticker){
    var data = tradingAPI(ticker)
    console.log(data, 'data from apiRequesting')
    tradingAPI(ticker).then(function(data) {
        console.log(data, 'data from testAPI')
    }, function(error) {
        console.log(error);
    })

};

dataReceived = function(data){
    //do something with data
    console.log(data, "this is out of the loop");
};


window.addEventListener("load",function(event){
    console.log("this is the new entry point");
    populateList();

});


