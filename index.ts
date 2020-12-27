// const run = async () => {
//   // Create S3 bucket
//   try {
//     const data = await s3.send(new CreateBucketCommand(bucketParams));
//     console.log("Success. Bucket created.");
//   } catch (err) {
//     console.log("Error", err);
//   }
//   try {
//     const results = await s3.send(new PutObjectCommand(objectParams));
//     console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
//   } catch (err) {
//     console.log("Error", err);
//   }
// };
// run();

import {upload, uploadFiles} from "./src/actions/upload";

let argv = require('minimist')(process.argv.slice(2));
// -path -album

argv._.forEach((command: string) => {
    switch (command) {
        case 'upload':
            if (argv.p && argv.a) {
                uploadFiles({
                    path: argv.p,
                    album: argv.a
                });
            }
            break;
        case 'download':
            break;
        case 'list':
    }
});
