import * as fs from "fs";

export const readFile = (path) => {
    return fs.createReadStream(path);
};
