


function dataFormatter(data){

    var timeData = Object.values(data)[1];
    console.log(timeData, "this is the time data output");
    var dayData = days(timeData);
    var openArray = [];
    var closeArray = [];

    for(var i = 0; i<Object.values(timeData).length; i ++){
        var open = openData(Object.values(timeData)[i]);
        openArray.push(open);

    }

    console.log(openArray, open, 'array information');

}

function days(data){
    var daysArray = [];
    for(var i in data){
        daysArray.push(i);
    }
    return daysArray;
}

function openData(data){
    return Object.values(data)[0];
}







module.exports = dataFormatter;