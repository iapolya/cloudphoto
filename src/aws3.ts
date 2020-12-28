import {promisify} from "util";
require('dotenv').config();

const AWS = require("aws-sdk");
AWS.config.update({
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_KEY
    },
});

export const s3 = new AWS.S3({ apiVersion: "2006-03-01" });
export const Bucket = process.env.BUCKET_NAME;

export const download = (key: string) => {
    return s3.getObject({ Bucket, Key: key }).createReadStream();
};

export const s3Upload = promisify(s3.upload.bind(s3));
export const s3ListObjects = promisify(s3.listObjectsV2.bind(s3));
