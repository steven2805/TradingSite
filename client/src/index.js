var Companies = require("./companyseeds.js");
var APICalling = require("./tradingAPI");

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
    createListeners(companies);

};

createListeners = function(){
    var element = document.querySelectorAll('button');
    console.log(element);
    for( var i = 0; i<element.length; i ++){
        console.log(i);
        element[i].addEventListener("click", function(event){
            console.log(event.target.id);
        })
    }

};


callSomething = function(element){
     console.log("something was clicked",element);
};


window.addEventListener("load",function(event){
    console.log("this is the new entry point");
    populateList();

});

