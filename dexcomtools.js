var requirejs = require("requirejs");
var SerialPort = require('serialport').SerialPort;
requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

requirejs(["./app/datasource/dexcom"], function(dexcom) {
	dexcom.connect().then(function() {
		var page = 1;
		debugger;
		dexcom.readFromReceiver(page).then(function(data) {
			console.log(data);
		});
	}, function() {
		console.log("Couldn't find Dexcom");
	});
});