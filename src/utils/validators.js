const isImage = (path) => {
    return path && (path.endsWith(".jpg") || path.endsWith(".jpeg"));
};

module.exports = {
    isImage
};
