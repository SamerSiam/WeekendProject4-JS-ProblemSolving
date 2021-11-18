const length=20;
const width=10;
const perimeter= rectanglePerimeter(length,width);
console.log(`Perimeter of the Rectangle that has ${length} length and ${width} width is: ${perimeter}`);
    
function rectanglePerimeter(len,wid)
{
    return (2*len + 2*wid);
}

