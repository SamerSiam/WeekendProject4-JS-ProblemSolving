const testStr = "abacc111";  // test string

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

    const countDup = (str) => {
    const sortedStr = ascCaseStringSort(str);
    console.log(sortedStr);
    const mapCounter = new Map();
    let counter = 1;
    let keyCounter = 0;
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
            console.log(`${key} occurs: ${value} times`);
            keyCounter++;
        }

    }
    if (keyCounter===0)
    {
        console.log("0 #, no charachters repeat more than once");
    }


    // console.log(mapCounter);
    // console.log(mapCounter.values());

}

countDup(testStr);