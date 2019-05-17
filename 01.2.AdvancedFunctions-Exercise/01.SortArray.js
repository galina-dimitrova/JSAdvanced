function sortA(arr, str) {
    let ascComparator = function(a,b) {
        return a-b;
    }
    let descComparator = function(a,b) {
        return b-a;
    }
    let sortingStrategies = {
        'asc': ascComparator,
        'desc': descComparator
    }
    return arr.sort(sortingStrategies[str])
}

sortA([14, 7, 17, 6, 8], 'asc')