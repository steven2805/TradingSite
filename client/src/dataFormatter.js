


function dataFormatter(data){
    // console.log(Object.values(data)[1])
    var timeData = Object.values(data)[1];
    console.log(timeData, "this is the time data output");
    var dayData = days(timeData);


}

function days(data){
    var daysArray = [];
    for(var i in data){
        daysArray.push(i);
    }
    return daysArray;
}








module.exports = dataFormatter;