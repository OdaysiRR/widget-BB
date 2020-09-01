//import React from 'react'

const transformPrice = (number) => {
    const arr = [...(number.toString())].reverse();
    const result = [];
    let pivot = 0;
    while (pivot < arr.length) {
        result.push(arr.slice(pivot, pivot + 3).reverse().join(''));
        pivot += 3;
    }
    return result.reverse().join(' ');
}
export default transformPrice;