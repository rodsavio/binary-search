const binarySearch = require('./search');

const listToSearch = [];
const listLength = 20;
const positionToFind = 10; //Automatically gets an element that will be used in the search
let elementToFind = 0;

for (let index = 0; index < listLength; index++) {
    const newNumber = Math.floor(Math.random() * 1000);
    listToSearch.push(newNumber);

    if (index == positionToFind) { elementToFind = newNumber };
}

const listOrderedToSearch = listToSearch.sort((a, b) => a - b);
const result = binarySearch(elementToFind, listOrderedToSearch);

console.log(`element: ${elementToFind}`);
console.log(`list: ${listOrderedToSearch}`);
console.log(result);