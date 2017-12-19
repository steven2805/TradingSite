

// TODO rename div from tester to something more suitable.

function charting(dayData,openArray,lowArray,highArray,closeArray) {
    var div = document.getElementById("tester");
    console.log(div);
    console.log(dayData, lowArray);
    var setupData = setupdata(dayData,openArray,lowArray,highArray,closeArray);
    var layout = layoutSetup();
    console.log("we are here in the launch thing", setupData);

    Plotly.plot("tester", setupData, layout);

}


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

function layoutSetup(){

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
            range: ['2017-07-27 12:00', '2017-12-15 12:00'],
            rangeslider: {range: ['2017-07-27 12:00', '2017-12-15 12:00']},
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

// function charting(open, close){
//
//     Plotly.plot('tester', setup(open), layout);
// }
//
// function setup(open) {
//     var trace1 = {
//
//         x: ['2017-01-04', '2017-01-05', '2017-01-06', '2017-01-09', '2017-01-10', '2017-01-11', '2017-01-12', '2017-01-13', '2017-01-17', '2017-01-18', '2017-01-19', '2017-01-20', '2017-01-23', '2017-01-24', '2017-01-25', '2017-01-26', '2017-01-27', '2017-01-30', '2017-01-31', '2017-02-01', '2017-02-02', '2017-02-03', '2017-02-06', '2017-02-07', '2017-02-08', '2017-02-09', '2017-02-10', '2017-02-13', '2017-02-14', '2017-02-15'],
//
//         close: [116.019997, 116.610001, 117.910004, 118.989998, 119.110001, 119.75, 119.25, 119.040001, 120, 119.989998, 119.779999, 120, 120.080002, 119.970001, 121.879997, 121.940002, 121.949997, 121.629997, 121.349998, 128.75, 128.529999, 129.080002, 130.289993, 131.529999, 132.039993, 132.419998, 132.119995, 133.289993, 135.020004, 135.509995],
//
//         decreasing: {line: {color: '#7F7F7F'}},
//
//         high: [116.510002, 116.860001, 118.160004, 119.43, 119.379997, 119.93, 119.300003, 119.620003, 120.239998, 120.5, 120.089996, 120.449997, 120.809998, 120.099998, 122.099998, 122.440002, 122.349998, 121.629997, 121.389999, 130.490005, 129.389999, 129.190002, 130.5, 132.089996, 132.220001, 132.449997, 132.940002, 133.820007, 135.089996, 136.270004],
//
//         increasing: {line: {color: '#17BECF'}},
//
//         line: {color: 'rgba(31,119,180,1)'},
//
//         low: [115.75, 115.809998, 116.470001, 117.940002, 118.300003, 118.599998, 118.209999, 118.809998, 118.220001, 119.709999, 119.370003, 119.730003, 119.769997, 119.5, 120.279999, 121.599998, 121.599998, 120.660004, 120.620003, 127.010002, 127.779999, 128.160004, 128.899994, 130.449997, 131.220001, 131.119995, 132.050003, 132.75, 133.25, 134.619995],
//
//         open: open,
//
//         type: 'candlestick',
//         xaxis: 'x',
//         yaxis: 'y'
//     };
//     var data = [trace1];
//     return data;
// }
//
//
// var layout = {
//     dragmode: 'zoom',
//     margin: {
//         r: 10,
//         t: 25,
//         b: 40,
//         l: 60
//     },
//     showlegend: false,
//     xaxis: {
//         autorange: true,
//         domain: [0, 1],
//         range: ['2017-01-03 12:00', '2017-02-15 12:00'],
//         rangeslider: {range: ['2017-01-03 12:00', '2017-02-15 12:00']},
//         title: 'Date',
//         type: 'date'
//     },
//     yaxis: {
//         autorange: true,
//         domain: [0, 1],
//         range: [114.609999778, 137.410004222],
//         type: 'linear'
//     }
// };
//
// module.exports = charting;