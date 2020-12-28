import {Bucket, s3ListObjects} from "../aws3";
import {isImage} from "../utils/validators";

export const listFiles = () => {
    return s3ListObjects({ Bucket }).then((response) =>
        response.Contents
    );
}

export const listFilesInAlbum = (album: string) => {

};

export const listAlbums = () => {
    listFiles().then((files) => {
        let albums = new Set();
        files.forEach((file) => {
            let pathParts = file.Key.split('/');
            pathParts.pop();

            albums.add(pathParts.join('/'));
        });

        console.log(`Список альбомов: ${Array.from(albums).join(', ')}`);
    });
};
