let longStr = '';
function fizzbuzz(maxValue){
    for (let i = 1; i <= maxValue; i++){
        if (i % 2 === 0 && i % 3 === 0){
            longStr += "FizzBuzz,"
        }
        else if(i % 2 === 0){
            longStr += "Fizz,"
        }
        else if(i % 3 === 0){
            longStr += "Buzz,"
        }
        else{
            longStr += (i + ",");
        }
    }
    return longStr;
}
document.write(fizzbuzz(1000));
