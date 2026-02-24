// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b ,c) {
    if (b < a > c) {
        return a
    } else if (a < b > c) {
        return b
    } else (a < c > b) 
        return c
}

console.log(findLargest(1, 2, 3))