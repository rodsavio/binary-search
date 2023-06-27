const binarySearch = (element, listOrderedToSearch) => {
    let start = 0;
    let finish = listOrderedToSearch.length - 1;
    let position = 0;
    let iteractions = 0;
    
    while (start <= finish) {
        position = Math.round((start + finish) / 2);
        iteractions++;

        if (listOrderedToSearch[position] == element)
        {
            console.log(`Total of loops ${iteractions}`);
            return `Found at ${position + 1}`;
        }
        else if (listOrderedToSearch[position] < element)
            start = position + 1;
        else
            finish = position - 1;
        
        //The +1 and -1 exists because I can exclude the current element in the new search
    }

    console.log(`Total of loops ${iteractions}`);
    return "Not found :(";
};

module.exports = binarySearch;