const { listFiles } = require("./list");
const  { compareArrays } = require("../utils/core");
const fs = require("fs");
const { download } =  require("../aws3");

const downloadFiles = (params) => {
    try {
        fs.statSync(params.path);
        let albumParts = params.album.split('/');
        listFiles().then((files) => files.forEach((content) => {
            writeFile(content, albumParts, params);
        }));
    } catch (e) {
        console.log('Каталога не существует');
    }

};

function writeFile(content, albumParts, params) {
    let keyParts = content.Key.split('/');
    let fileName = keyParts.pop();
    if (compareArrays(keyParts, albumParts)) {
        let file = fs.createWriteStream(params.path + "/" + fileName);
        download(content.Key).pipe(file);
    }
}

module.exports = { downloadFiles };
