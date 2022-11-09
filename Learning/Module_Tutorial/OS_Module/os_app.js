const os = require('os');

function gettotalMemory() {
    var totalMemory = os.totalmem();
    var freeMemory = os.freemem();

    console.log(`Total memory is ${totalMemory} and free memory is ${freeMemory}`);
}

gettotalMemory(); 