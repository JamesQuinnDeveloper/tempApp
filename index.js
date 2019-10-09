


var rpiDhtSensor = require('rpi-dht-sensor');
 var dht = new rpiDhtSensor.DHT11(4);
 
function read () {
var readout = dht.read();

var tempData = "tempData";
var tempRH = "tempRH";

readout.temperature.toFixed(2).value = tempData;
readout.humidity.toFixed(2).value = tempRH;

console.log('Temperature: ' + readout.temperature.toFixed(2) + 'C, ' +
        'humidity: ' + readout.humidity.toFixed(2) + '%');
    setTimeout(read, 5000);

}


