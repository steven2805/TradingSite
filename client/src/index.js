var Companies = require("./companyseeds.js");
var APICalling = require("./tradingAPI");

populateList = function(){
    console.log('this is the poopulate list');
    var companies = new Companies('null');
    console.log(companies);
    var ul = document.getElementById('CompanyName');
    for(var i in companies.listing){
        var li = document.createElement('li');
        li.innerText = i;
        li.onclick = requestedCompany(i);
        ul.appendChild(li);
    }

};

requestedCompany = function(companyName){
    
}



window.addEventListener("load",function(event){
    console.log("this is the new entry point");
    populateList();


})

