const sd = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const te = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'ninteen'];
const td = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

let ts = '';

let numberInput = document.getElementById("numberInput");
let paragraph = document.getElementById("p");


function helperFunction(){  
    ts = '';
    n = numberInput.value;
    paragraph.innerText = numbersToWords( n );
}


function numbersToWords( n ){
    //Check for numbers that we are not going to spell out
    if( n == 0){
        return("zero")
    }
    if( Math.sign(n) == -1 ){
        return("Positive numbers only.");
    }
    if( n > 1000){
        return("Only testing up to one thousand");
    }
    //Check if input is a number
    // if ( isNaN(numberInput) ){
    //     return("That's not a number");
    // }
    
    //for testing purposes we made a lot of vars...
    let x = n.toString();
    let xl = x.length;
    let d1 = x[ 0 ];
    let d2 = x[ 1 ];
    let d3 = x[ 2 ];
    let d4 = x[ 3 ];

    //
    // And now we rock
    //

    //single digit number
    if( xl === 1){
        // append the correspond index from sd[] to the empty string ts
        ts = ts + sd[ d1 ];
        return (ts);
    }


    //two digit numbers
    else if( xl === 2){
        
        if( d1 == 1 && d2 == 0 ){
            //it's ten
            // add index 1 of td ('ten') to the empty string ts
            ts = ts + td[ d1 ];
            return( ts );
        }
        else if ( d1 == 1 && d2 != 0 ){
            //it's a teen (eleven is a teen for our purposes)
            for( let i in te ){
                if( i == d2 ){
                    ts = ts + te[ d2 ];
                    return( ts );
                }
            }
        }
        else{
            //its larger than 19
            ts = ts + td[ d1 ] + " " + sd [ d2 ];
            return( ts );
        }
    }


    // three digit numbers
    else if( xl === 3){
        
        ts = ts + sd[ d1 ] + " hundred";
        
        if( d2 == 0 ){
            //some hundred and single digit
            ts = ts + " and " + sd[ d3 ];
            return( ts );
        }
        else if( d2 == 1 && d3 == 0 ){
            //some hundred and multiple of ten
            ts = ts + " and " + td[ d2 ];
            return( ts );
        }
        else if( d2 == 1 && d3 != 0){
            //some hundred and teen
            for( let i in te ){
                if( i == d2 ){
                    ts = ts + " " + te[ d3 ];
                    return( ts );
                }
            }
        }
        else{
            //some hundred and greater than 19
            ts = ts + " and " + td[ d2 ] + " " + sd[ d3 ];
            return( ts );
        }
    }

    // the input was 1,000 
    //no need to test for 4 digit numbers, anything higher than 1000 is an error.
    else{
        return ("One Thousand")
    }
}
//document.write(numbersToWords(985));