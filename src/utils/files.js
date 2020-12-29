const fs = require("fs");

const readFile = (path) => {
    return fs.createReadStream(path);
};

const getFileName = (path) => {
    return path.split('/').pop();
}

module.exports = {
    readFile,
    getFileName
}
