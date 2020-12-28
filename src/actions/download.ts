import {UploadParameters} from "../types";
import {listFiles} from "./list";
import {_Object} from "@aws-sdk/client-s3";
import {compareArrays} from "../utils/core";
import * as fs from "fs";
import {download} from "../aws3";

export const downloadFiles = (params: UploadParameters) => {
    try {
        fs.statSync(params.path);
        let albumParts = params.album.split('/');
        listFiles().then((files) => files.forEach((content: _Object) => {
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
