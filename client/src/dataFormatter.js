var charting = require('./charting.js');



function dataFormatter(data){

    var timeData = Object.values(data)[1];
    console.log(timeData, "this is the time data output");
    var dayData = days(timeData);
    var openArray = [];
    var lowArray = [];
    var highArray = [];
    var closeArray = [];

    for(var i = 0; i<Object.values(timeData).length; i ++){
        var data = sortData(Object.values(timeData)[i]);
        openArray.push(data[0]);
        console.log(openArray, "this is the open array", i);
        lowArray.push(data[1]);
        highArray.push(data[2]);
        closeArray.push(data[3]);
    }
    charting(dayData,openArray,lowArray,highArray,closeArray);
    // charting(openArray);

}

function days(data){
    var daysArray = [];
    for(var i in data){
        daysArray.push(i);
    }
    return daysArray;
}

function sortData(input){
    var data = [];
    data.push(Object.values(input)[0]);
    data.push(Object.values(input)[1]);
    data.push(Object.values(input)[2]);
    data.push(Object.values(input)[3]);
    return data;
}







module.exports = dataFormatter;