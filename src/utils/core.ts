export const compareArrays = (array1: string[], array2: string[]): boolean => {
    return array1.length === array2.length
        && JSON.stringify(array1) === JSON.stringify(array2);
};

