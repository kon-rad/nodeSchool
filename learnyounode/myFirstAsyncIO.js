var fs = require('fs');


function getBuffer() {

  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
  	if (err) {
  		return console.log(err);
  	}
  	var str = fileContents.toString();
  	var lines = str.split('\n').length - 1;
  	console.log(lines);
  });
}

getBuffer();



// OFFICIAL SOLUTIONS


    // var fs = require('fs')
    // var file = process.argv[2]
    
    // fs.readFile(file, function (err, contents) {
    //   if (err) {
    //     return console.log(err)
    //   }
    //   // fs.readFile(file, 'utf8', callback) can also be used
    //   var lines = contents.toString().split('\n').length - 1
    //   console.log(lines)
    // })

