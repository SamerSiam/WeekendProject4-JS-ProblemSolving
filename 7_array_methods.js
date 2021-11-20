
const testArr=[10, 20, 30, 40, 50, 60, 70,80, 90, 100];
console.log(arrFilter(testArr,40 ));
arrForEach (testArr, 5);
console.log(arrMap(testArr, 3));

/** Implementing  Filter Method -return an array with all
 * matches
*/
function arrFilter(arr, val)
{
    const len= arr.length;
    const resulArr=[];
    for (let i=0; i< len; i++)
    {
        if (arr[i]>=val)
        {
            resulArr.push(arr[i]);
        }
    }
    return resulArr;
}

/** Implementing forEach method, this method loops through the array
 * and modifies the elements of the original array
 */
function arrForEach( arr, val)
{
    const len= arr.length;
    for (let i=0; i< len; i++)
    {
        arr[i]= arr[i]+val;
        
    }
    console.log(arr);
}

/** Implementing Map method, this method loops through the array
 * and returns a new array based on the calling function
 */
 function arrMap( arr, val)
 {
     const len= arr.length;
     const resultArr=[];
     for (let i=0; i< len; i++)
     {
         resultArr[i]= Math.pow(arr[i],val);
         
     }
     return(resultArr);
 }