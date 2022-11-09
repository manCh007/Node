const path = require('path');
function getPathObject() {
    const pathObject = path.parse(__filename);
    console.log(pathObject);
}

getPathObject();