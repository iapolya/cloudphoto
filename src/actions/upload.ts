import {BucketUpload, UploadParameters} from "../types";
import {bucketName, s3} from "../aws3";
import {PutObjectCommand} from "@aws-sdk/client-s3";
import * as fs from "fs";

export const upload = async (params: BucketUpload) => {
    const objectParams = { Bucket: bucketName, Key: params.path, Body: params.file };
    await s3.send(new PutObjectCommand(objectParams));
};


export const uploadFiles = (params: UploadParameters) => {
    return fs.readdirSync(params.path)
        .filter(isImage)
        .map(async (photo) => {
            let file = await readFile(params.path + "/" + photo);
            await upload({ path: `${params.album}/${photo}`, file });
        });
};

const readFile = (path) => {
    return fs.createReadStream(path);
};

const isImage = (path: string) => {
    return path && (path.endsWith(".jpeg") || path.endsWith(".jpg"));
};
