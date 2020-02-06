"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function uniqueFilter(value, index, array) {
    return array.indexOf(value) === index;
}
function unique(numberArray) {
    return numberArray.filter(uniqueFilter);
}
exports.unique = unique;
function sum(numberArray) {
    return numberArray.reduce((accumulator, currentVal) => {
        return accumulator + currentVal;
    }, 0);
}
exports.sum = sum;
