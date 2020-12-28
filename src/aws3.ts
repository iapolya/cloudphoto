import {promisify} from "util";

const AWS = require("aws-sdk");
AWS.config.update({
    region: "eu-north-1",
    credentials: {
        accessKeyId: "AKIAW3Y3FATCHRJVV42H",
        secretAccessKey: "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"
    },
});

const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

export const s3Upload = promisify(s3.upload.bind(s3));
export const s3ListObjects = promisify(s3.listObjectsV2.bind(s3));

export const Bucket = "testpolinaalikina";


const list = () => {
    return s3ListObjects({ Bucket }).then((response) =>
        response.Contents.map((object) => object.Key)
    );
};

export const download = (key: string) => {
    return s3.getObject({ Bucket, Key: key }).createReadStream();
};
