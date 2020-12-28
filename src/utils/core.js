const compareArrays = (array1, array2) => {
    return array1.length === array2.length
        && JSON.stringify(array1) === JSON.stringify(array2);
};

module.export = {
    compareArrays
}
