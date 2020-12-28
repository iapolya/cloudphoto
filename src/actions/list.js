const {Bucket, s3ListObjects} = require("../aws3");

const listFiles = () => {
    return s3ListObjects({ Bucket }).then((response) =>
        response.Contents
    );
}

const listFilesInAlbum = (album) => {
    listFiles().then((files) => {
        let photos = new Set();
        files.forEach((file) => {
            let pathParts = file.Key.split('/');
            pathParts.pop();

            if (pathParts.join('/') === album)
                photos.add(file.Key);
        });

        console.log(`Фотографии в альбоме "${album}": ${Array.from(photos).join(', ')}`);
    });
};

const listAlbums = () => {
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

module.exports = {
    listFiles,
    listFilesInAlbum,
    listAlbums
}
