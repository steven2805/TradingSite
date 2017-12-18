


function charting(data){
    var div = document.getElementById("tester");
    console.log(div);
    console.log(data);

    Plotly.plot( div, [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16] }], {
        margin: { t: 0 } } );
}


module.exports = charting;