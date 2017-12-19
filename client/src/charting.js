

// TODO rename div from tester to something more suitable.

function charting(dayData,openArray,lowArray,highArray,closeArray) {
    var setupData = setupdata(dayData,openArray,lowArray,highArray,closeArray);
    var layout = layoutSetup(dayData);
    Plotly.plot("tester", setupData, layout);
};


function setupdata(date,open,low,high,close){
    var trace1 = {

        x: date,

        close: close,

        decreasing: {line: {color: '#7F7F7F'}},

        high: high,

        increasing: {line: {color: '#17BECF'}},

        line: {color: 'rgba(31,119,180,1)'},

        low: low,

        open: open,

        type: 'candlestick',
        xaxis: 'x',
        yaxis: 'y'
    };
    var data = [trace1];
    return data;

}

function layoutSetup(day){

    var layout = {
        dragmode: 'zoom',
        margin: {
            r: 10,
            t: 25,
            b: 40,
            l: 60
        },
        showlegend: false,
        xaxis: {
            autorange: true,
            domain: [0, 1],
            range: [day[0], day[-1]],
            rangeslider: {range: [day[0], day[-1]]},
            title: 'Date',
            type: 'date'
        },
        yaxis: {
            autorange: true,
            domain: [0, 1],
            range: [100.609999778, 130.410004222],
            type: 'linear'
        }
    };

    return layout;

}



module.exports = charting;