// You could use the standard function Array.find() instead.
// Learn more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
function Contains(array, value){
    for(var i = 0; i < array.length; i++){
        if(array[i] === value)return true;
    }
    return false;
}
function HandleError(){
    console.log('Invalid parameters');
    process.exit(-1);
}
// If you would add the factors to the following data structure, your if/switch-code below could be simplified
var legalUnits = ['m', 'cm', 'mm', 'kg', 'g'];
// Tip: Format code using VSCode's format feature. Would add some whitespace that makes code more readable.
if(process.argv.length !== 6)HandleError();
if(isNaN(process.argv[2]))HandleError();
if(process.argv[4] !== 'to')HandleError(); 
if(!Contains(legalUnits, process.argv[3]))HandleError();
if(!Contains(legalUnits, process.argv[5]))HandleError();
// Smart solution ;-) Not generally usable but fine for this example.
if(String(process.argv[3]).charAt(process.argv[3].length - 1) !== String(process.argv[5]).charAt(process.argv[5].length - 1))HandleError();

var floatInput = parseFloat(process.argv[2]);
// convert to the baseunit of a value
if(String(process.argv[3]).charAt(process.argv[3].length - 1) === 'm'){
    // baseunit: m
    switch(process.argv[3]){
        case 'mm': floatInput /= 10;
        case 'cm': floatInput /= 100;
    }
    switch(process.argv[5]){
        case 'mm': floatInput *= 10;
        case 'cm': floatInput *= 100;
    }
}else{
    // baseunit: kg
    if(process.argv[3] === 'g')floatInput /= 1000;
    if(process.argv[5] === 'g')floatInput *= 1000;
}
console.log(process.argv[2] + ' ' + process.argv[3] + ' are ' + floatInput + ' ' + process.argv[5]);
