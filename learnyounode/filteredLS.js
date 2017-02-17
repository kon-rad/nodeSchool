

var fs = require('fs');
var path = require('path');
var file = process.argv[2];

fs.readdir(file, function doneReading(err, list) {
	if(err) {
		return console.log(err);
	}
	for (var i = 0; i < list.length; i++) {
        var format = process.argv[3];
		if(path.extname(list[i]) == ('.' + format)) {
            console.log(list[i]);
		}
	}
	
});


//OFFICIAL SOLUTION


    // var fs = require('fs')
    // var path = require('path')
    
    // var folder = process.argv[2]
    // var ext = '.' + process.argv[3]
    
    // fs.readdir(folder, function (err, files) {
    //   if (err) return console.error(err)
    //   files.forEach(function (file) {
    //     if (path.extname(file) === ext) {
    //       console.log(file)
    //     }
    //   })
    // })

