const testStr = "Abc";  // test string


/** this fucntion was written part of the Assignments and 
 * reused here to sort the string first
 */
const ascCaseStringSort = (str) => {
    str = str.toLowerCase().split("");
    return str.sort((a, b) => {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    });
}

/** implemented this using Map() object for each letter
 * and the key for the occurances**/
const isIsogram = (str) => {
    const sortedStr = ascCaseStringSort(str);
    console.log(sortedStr); // printed sorted list
    const mapCounter = new Map(); // map object to store dups
    let counter = 1;
    let keyCounter = 0;
    let isIsogram=false;
    for (let i = 0; i < str.length; i++) {

        if (sortedStr[i] === sortedStr[i + 1]) {
            counter++;
        }
        else {
            mapCounter.set(sortedStr[i], counter);
            counter = 1;
        }
    }
    // check which elements occur more than once
    for (let [key,value] of mapCounter) {
        
        if (value > 1) {
            
            isIsogram=false;
            keyCounter++;
            
        }

    }
    if (keyCounter===0)
    {
        isIsogram=true;
    }
 return isIsogram;
}
// call the function
console.log(isIsogram(testStr));