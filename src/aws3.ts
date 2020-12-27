const {
    S3Client,
    PutObjectCommand,
    CreateBucketCommand
} = require("@aws-sdk/client-s3");

// Set the AWS region
const REGION = "eu-north-1"; // e.g., "us-east-1"

// Set the bucket parameters
export const bucketName = "testpolinaalikina";
const bucketParams = { Bucket: bucketName };

// Create name for uploaded object key
const keyName = "hello_world.txt";
const objectParams = { Bucket: bucketName, Key: keyName, Body: "Hello World!" };

// Create an S3 client service object
export const s3 = new S3Client({
    credentials: {
        accessKeyId: "AKIAW3Y3FATCHRJVV42H",
        secretAccessKey: "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"
    },
    region: REGION
});
