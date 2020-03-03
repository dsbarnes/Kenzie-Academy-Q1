function add(a ,b){
    return (a + b);
}

function multiply(a, b){
    // multiplication is just addition N time.
    // I want some numer 'a' to be added to itself 'b' times.
    
    let num = a;
    for (let i = 1; i < b; i = add(i,1)){
        a = add(a, num);
    }
    return(a);
}

function power(x, n){
    // an exponent is just multiplication N times
    // I want x multiplied by itself n times.

    let num = x;
    for ( let i = 1; i < n; i = add(i,1)){
        x = multiply(x, num);
    }
    return(x);
}

function factorial(x){

    //return (x != 1) ? multiply(x, factorial(add(x, -1))) : 1;
    // I'm not sure about aboves syntax.
    // I think its this: !!ITS NOT!!
    // return( multiply(x, factorial(add(x, -1))));


    // let total = x;
    // let inc = x;
    // while (inc > 1){
    //     total = multiply(total, inc-1);
    //     inc = inc - 1;
    // }
    // return(total);

    //in order to be "right,"" perhaps I need to start at 1
    // and multiply up to N. ???
    let total = 2;
    let inc = 2;
    while (inc < x){
        total = multiply(total, add(inc, 1));
        inc = add(inc, 1);
    }
    return(total);
}

function fibonacci(x){
    // Google said it's this...
    // The 'correct' answer is 0, 1, 1, 2, 3, 5 ...

    let num_1 = 0, num_2 = 1, num_3 = 0;
    for (let i = 2; i<= x; i = add(i, 1)){
        num_3 = add(num_1, num_2);
        num_1 = num_2;
        num_2 = num_3;
    }
    return (num_1);
}
