const onlyUnique = (value: any, index: number, array: any[]) => {
    return array.indexOf(value) === index
}

export const getArrayWithUniqueItems = (array: any[]) => {
    return array.filter(onlyUnique)
}
