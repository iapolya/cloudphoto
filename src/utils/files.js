const fs = require("fs");

const readFile = (path) => {
    return fs.createReadStream(path);
};

module.exports = {
    readFile
}
