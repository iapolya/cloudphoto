const {
    S3Client,
} = require("@aws-sdk/client-s3");
const AWS = require("aws-sdk");

const REGION = "eu-north-1";

export const bucketName = "testpolinaalikina";
const bucketParams = { Bucket: bucketName };

export const s3 = new S3Client({
    credentials: {
        accessKeyId: "AKIAW3Y3FATCHRJVV42H",
        secretAccessKey: "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"
    },
    region: REGION
});
