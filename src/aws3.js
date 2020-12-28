const promisify = require("util").promisify;
require('dotenv').config();

const AWS = require("aws-sdk");
AWS.config.update({
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_KEY
    },
});

const s3 = new AWS.S3({ apiVersion: "2006-03-01" });
const Bucket = process.env.BUCKET_NAME;

const download = (key) => {
    return s3.getObject({ Bucket, Key: key }).createReadStream();
};

const s3Upload = promisify(s3.upload.bind(s3));
const s3ListObjects = promisify(s3.listObjectsV2.bind(s3));

module.exports = {
    s3,
    download,
    Bucket,
    s3Upload,
    s3ListObjects
}
