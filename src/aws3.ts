import {promisify} from "util";

const AWS = require("aws-sdk");
AWS.config.update({
    region: "eu-north-1",
    credentials: {
        accessKeyId: "AKIAW3Y3FATCHRJVV42H",
        secretAccessKey: "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"
    },
});

export const s3 = new AWS.S3({ apiVersion: "2006-03-01" });
export const Bucket = "testpolinaalikina";

export const download = (key: string) => {
    return s3.getObject({ Bucket, Key: key }).createReadStream();
};

export const s3Upload = promisify(s3.upload.bind(s3));
export const s3ListObjects = promisify(s3.listObjectsV2.bind(s3));
