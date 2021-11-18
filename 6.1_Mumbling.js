const testStr="RqaEzty";  // test string

function accum(str)
{   
    str= str.split("");
    let returnStr="";
    let addedString="";
    
    str.forEach((letter,idx) => {
        letter=letter.toUpperCase();
        addedString=(letter.toLowerCase()).repeat(idx);
        returnStr=returnStr+letter+addedString+"-";
    });
    // chop the last "-" from the end
    return returnStr.substring(0,returnStr.length-1);
}
console.log (accum(testStr));