function myFunc() {
    
    let summary = {};
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type+': ' +obj);
        if (!summary[type]) {
            summary[type] = 1;
        } else {
            summary[type]++;
        }
    }
    let sortedTypes = [];
    for (const currentType in summary) {
        sortedTypes.push([currentType, summary[currentType]]);
    }
    // sortedTypes.sort()
    for (const key in sortedTypes) {
        if (sortedTypes.hasOwnProperty(key)) {
            const element = sortedTypes[key];
            console.log(`${element[0]} = ${element[1]}`)
        }
    }
}

myFunc({ name: 'bob'}, 3.333, 9.999)
