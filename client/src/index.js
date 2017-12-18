var Companies = require("./companyseeds.js");
var tradingAPI = require("./tradingAPI");
var charting = require("./charting");
var dataFormatting = require ('./dataFormatter');


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
            apiRequesting(event.target.id);
        })
    }

};

apiRequesting = function(ticker){
    tradingAPI(ticker).then(function(data) {
        dataReceived(data);
    }, function(error) {
        console.log(error);
    })
};

dataReceived = function(data){
    var cleanData = JSON.parse(data);
    dataFormatting(cleanData);


};


window.addEventListener("load",function(event){
    console.log("this is the new entry point");
    populateList();

});


