import {UploadParameters} from "../types";
import {bucketName, s3} from "../aws3";
import {_Object, ListObjectsCommand} from "@aws-sdk/client-s3";
import {compareArrays} from "../utils/core";
import * as fs from "fs";
import {ReadStream} from "fs";

export const downloadFiles = (params: UploadParameters) => {
    s3.send(new ListObjectsCommand({
        Bucket: bucketName
    })).then(data => {
        let albumParts = params.album.split('/');
        data.Contents
            .forEach(
                async (content: _Object) => {
                    downloadFileByKey(content.Key);
                    console.log(content);
                    // await writeFile(content, albumParts, params)
                }
            )
    });
};

export const downloadFileByKey = (key: String): ReadStream => {
    return s3.GetObject({ Bucket: bucketName, Key: key });
};

// async function writeFile(content, albumParts, params) {
//     let keyParts = content.Key.split('/');
//     let fileName = keyParts.pop();
//     if (compareArrays(keyParts, albumParts)) {
//         let file = fs.createWriteStream(params.path + "/" + fileName);
//         file._write(downloadFileByKey(content.key));
//     }
// }
