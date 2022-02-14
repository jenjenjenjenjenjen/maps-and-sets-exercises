// What does the following code return?

// new Set([1,1,2,2,3,4])

// {1,2,3,4}


// What does the following code return?

// [...new Set("referee")].join("")

// "ref"


// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

// 0: {Array(3) => true}
// 1: {Array(3) => false}

const hasDuplicates = arr => new Set(arr).size !== arr.length;

function isVowel(char) {
    return "aeiou".includes(char);
}
function vowelCount(str) {
    const newMap = new Map();
    for (let char of str) {
        let lowerCase = char.toLowerCase();
        if (isVowel(lowerCase)) {
            newMap.set(lowerCase, newMap.get(lowerCase)+1);
        } else {
            newMap.set(lowerCase, 1);
        }
    }
    return newMap;
}

