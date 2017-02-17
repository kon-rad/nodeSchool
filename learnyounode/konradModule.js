//konradModule.js
module.exports = function(path, ext, callback) {
	var fs = require('fs');
	var path = require('path');
	var file = process.argv[2];
	var result = [];

	fs.readdir(path, function doneReading(err, list) {
		if(err) {
			return console.log(err);
		}
		for (var i = 0; i < list.length; i++) {
	        var format = process.argv[3];
			if(path.extname(list[i]) == ('.' + format)) {
	            //result.push(list[i]);
	            console.log(list[i]);
			}
		}
		//console.log(result);
	});
}
