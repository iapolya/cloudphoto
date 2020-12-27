export const isImage = (path: string) => {
    return path && (path.endsWith(".jpeg") || path.endsWith(".jpg"));
};
