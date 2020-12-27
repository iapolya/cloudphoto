import {ReadStream} from "fs";

export interface UploadParameters {
    path: string,
    album: string
}

export interface BucketUpload {
    file: ReadStream,
    path: string
}
