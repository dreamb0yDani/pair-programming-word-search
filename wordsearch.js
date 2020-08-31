const transpose = function (matrix) {

    const transposedArray = [];

    for (let i = 0; i < matrix[0].length; i++) {
        let rowArray = [];
        for (let j = 0; j < matrix.length; j++) {
            rowArray.push(matrix[j][i]);
        }
        transposedArray.push(rowArray);
    }

    return transposedArray;
}

const wordSearch = (letters, word) => {

    const horizontalJoin = letters.map(ls => ls.join(''))
    const vertical = transpose(letters).map(ls => ls.join(''))

    const newArr = [...horizontalJoin, ...vertical]

    newArr.concat(newArr.reverse())
    console.log(newArr);

    for (l of newArr) {
        if (l.includes(word)) return true;
    }
    return false
}

module.exports = wordSearch