const testStr1="xyaabbccccdefww";
const testStr2="xxxxyyyyabklmopqxy";
console.log(organizeStrings(testStr1,testStr2));


/** this fucntion was written part of the Assignments and 
 * reused here to sort the string first
 */
 function ascCaseStringSort (str) {
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

function organizeStrings(str1,str2)
{
    let newStr= ascCaseStringSort(str1+str2); //sort the string
    let result=[... new Set(newStr)]; // this returns unique items

    // this is another solution below, also works
    // let result= newStr.filter((s,i,a)=> a.indexOf(s)===i);
    return(result.join(''));

}