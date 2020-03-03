// let testArray = [1, 2, 3, 'a', 'b', 'c'];
function callback(currentVale, index=0, array=0){
    //Whatever the user does with currentValue, inndex, or array
}

//.forEach() doesn't store the data anywhere by default
function newForEach(array, callback) {
    for (let item = 0; item < array.length; item++) {
        const currentValue = array[item]
        callback(currentValue, index, array)
    }
}

// .map() is forEach but stores the result of the callback in a new array
function newMap(array, callback){
    for(let item = 0; item < array.length; item++){
        const currentValue = array[item]
        let returnArray = []
        returnArray.push(callback(currentValue, index, array))
        return returnArray;
    }
}

// .some() is strange. it returns true if any index in the array 
// it's passesd passes the callback logig
function newSome(array, callback){
    for(item = 0; item < array.length; item++){ 
        let currentValue = array[item]
        //if the callback returns true for any index, return true.
        //else callback returns false, return false.
        if (callback(currentValue, index, array) == true) {return true} else {return false}
    }
}

// .find() returns the value of the first array index that matches the callback logic
function newFind(array, callback){
    for(item = 0; item < array.length; item++){
        let currentVale = array[item]
        // .find() only takes one peram.
        // if the callback returns true, return the value at the index .
        // remember, return stops the function from continuing.
        if(callback(currentVale)){
            return array[item]
        }
    }
}

//.findIndex() is the same as .find() but returns the index, not the value at that index.
function newFindIndex(array, callback){
    for(item = 0; item < array.length; item++){
        let currentVale = array[item]
        if(callback(currentVale, index, array)){
            return item
        }
    }
}


//This one is funny to think about, but really it's just .sum() flipped
// .every() is like .some() but every memeber of the array has to match the callback logic.
// instead of saying return the first index that is true
// we say return the first index that is false
// if there is no index that is false, return true
// for .some() if there is no index that is true, it retuns false...
// thus .every() is .sum() flipped. 


function newEvery(array, callback){
    for(item = 0; item < array.length; item++){
        let currentValue = array[item]
        if (!callback(currentValue, index, array) == false) {return false} else {return true}
    }
}

// .filter() is like somewhat like .find() and .map() at the same time
// .find() returns the value of an index,
// .map() make a new array
// instead of returning the value that .find() would return, we want to push it to an new array
// then return that array (like .map() would)
function newFilter(array, callback){
    for(item = 0; item < array.length; item++){
        let currentVale = array[item]
        let returnArray = []
        if (callback(currentVale, index, array)){
            returnArray.push(array[item])
        }
        return returnArray
    }
}
