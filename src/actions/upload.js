const fs = require("fs");
const { readFile } =  require("../utils/files");
const { isImage } =  require("../utils/validators");
const { Bucket, s3Upload } =  require("../aws3");

const upload = async (params) => {
    await s3Upload({ Bucket, Key: params.path, Body: params.file });
};

const uploadFiles = (params) => {
    try {
        let filesInPath = fs.readdirSync(params.path);
        return filesInPath.filter(isImage)
            .map(async (photo) => {
                let file = await readFile(params.path + "/" + photo);
                await upload({ path: `${params.album}/${photo}`, file });
            });
    } catch (e) {
        console.log('Каталог не существует')
    }
};

module.exports = {
    uploadFiles,
    upload
}
