import {BucketUpload, UploadParameters} from "../types";
import * as fs from "fs";
import {readFile} from "../utils/files";
import {isImage} from "../utils/validators";
import {Bucket, s3Upload} from "../aws3";

export const upload = async (params: BucketUpload) => {
    await s3Upload({ Bucket, Key: params.path, Body: params.file });
};

export const uploadFiles = (params: UploadParameters) => {
    try {
        let filesInPath = fs.readdirSync(params.path);
        return filesInPath.filter(isImage)
            .map(async (photo) => {
                let file = await readFile(params.path + "/" + photo);
                await upload({ path: `${params.album}/${photo}`, file });
            });
    } catch (e) {
        console.log('Каталог не существует')
    }
};
