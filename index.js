#!/usr/bin/env node

const { listAlbums, listFilesInAlbum } = require("./src/actions/list");
const { uploadFiles } = require("./src/actions/upload");
const { downloadFiles } = require("./src/actions/download");

let argv = require('minimist')(process.argv.slice(2));

argv._.forEach(async (command) => {
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
            if (argv.p && argv.a) {
                downloadFiles({
                    path: argv.p,
                    album: argv.a
                });
            }
            break;
        case 'list':
            if (argv.a) {
                listFilesInAlbum(argv.a);
            } else {
                listAlbums();
            }
            break;
        default:
            console.log('Поддерживаемые команды: upload, download, list')
    }
});
