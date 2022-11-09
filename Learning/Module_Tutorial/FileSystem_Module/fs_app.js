const fs = require('fs');

function fsOperation() {
    var files = fs.readdirSync('./');
    console.log(files);
}

function fsOperationAsync() {
    fs.readdir('./', function(err, files) {
        if(err) console.log(`Error ${err}`);
        else console.log(`Files : ${files}`);
    });
}

fsOperation();

fsOperationAsync();