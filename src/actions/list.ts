import {Bucket, s3ListObjects} from "../aws3";

export const listFiles = () => {
    return s3ListObjects({ Bucket }).then((response) =>
        response.Contents
    );
}
