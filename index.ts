// import {upload, uploadFiles} from "./src/actions/upload";
import {downloadFiles} from "./src/actions/download";
import {listFiles} from "./src/actions/list";
import {uploadFiles} from "./src/actions/upload";

let argv = require('minimist')(process.argv.slice(2));

argv._.forEach(async (command: string) => {
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
            listFiles();
            break;
    }
});
