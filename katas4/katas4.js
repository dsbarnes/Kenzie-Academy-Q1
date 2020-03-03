const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function helperKata(n, str){
    let div = document.createElement('div');
    div.textContent = n;
    document.body.appendChild(div);

    let div2 = document.createElement('div');
    div2.textContent = JSON.stringify(str);
    document.body.appendChild(div2);
}
function kata1(){
    let a = gotCitiesCSV.split(",");
    helperKata("Kata1", a);
    return(a);
}
kata1();

function kata2(){
    let a = bestThing.split(" ");
    helperKata("Kata2", a);
    return(a);
}
kata2();

function kata3(){
    let a = gotCitiesCSV.split(",").join(";");
    helperKata("kata3", a);
    return(a);
}
kata3();

function kata4(){
    let a = lotrCitiesArray.join(",");
    helperKata("kata4", a);
    return(a);
}
kata4();

function kata5(){
    let a = lotrCitiesArray.slice(0, 5);
    helperKata("kata5", a);
    return(a);
}
kata5();

function kata6(){
    let a = lotrCitiesArray.slice(-5);
    helperKata("kata6", a);
    return(a);
}
kata6();

function kata7(){
    let a = lotrCitiesArray.slice(2,5);
    helperKata("kata7", a);
    return(a);
}
kata7();

function kata8(){
    lotrCitiesArray.splice(2, 1);
    helperKata("kata8", lotrCitiesArray);
    return(lotrCitiesArray);
}
kata8();

function kata9(){
    lotrCitiesArray.splice(5, 2);
    helperKata("kata9", lotrCitiesArray);
    return(lotrCitiesArray);
}
kata9();

function kata10(){
    lotrCitiesArray.splice(2, 0, "Rohan");
    helperKata("kata10", lotrCitiesArray);
    return(lotrCitiesArray);
}
kata10();

function kata11(){
    lotrCitiesArray.splice(5, 1, "Deadest Marshes");
    helperKata("kata11", lotrCitiesArray);
    return(lotrCitiesArray);
}
kata11();

function kata12(){
    let a = bestThing.slice(0, 14);
    helperKata("kata12", a);
    return(a);
}
kata12();

function kata13(){
    let a = bestThing.slice(-12);
    helperKata("kata13", a);
    return(a);
}
kata13()

function kata14(){
    let a = bestThing.slice(23, 39);
    helperKata("kata14", a);
    return(a);
}
kata14();

function kata15(){
    let a = bestThing.substr(-12);
    helperKata("kata15", a);
    return(a);
}
kata15();

function kata16(){
    let a = bestThing.substr(23, 15);
    helperKata("kata16", a);
    return(a);
}
kata16();

function kata17(){
    let a = bestThing.split(" ");
    let b = a.indexOf("only");
    helperKata("kata17", b);
    return(b);
}
kata17();

function kata18(){
    let w = bestThing.split(" ");
    let a = w.indexOf(w[w.length -1]);
    helperKata("kata18", a);
    return(a);
}
kata18();

function kata19() {
    
    // const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
    let dv = ["aa", "ee", "ii", "oo", "uu"];
    
    //I think I worked it out:

    let a = gotCitiesCSV
            .split(",") //turns the gotCities CSV into an array called "a"
            .reduce((pre, cur) =>{ //pre = [], and cur = each member of "a" (gotCities)
            let b = dv //b is going to be a new array, but will not be output - cur will be output
            .filter(val => cur.indexOf(val) !== -1); //if the str, say 'aa', has an index in say, 'Kings Landing'
                                                     //then b = ['aa'], else b =[]
                                                     //if the str 'ee' has an index in 'Kings Landing'
                                                     //then b = ['aa', 'ee'], or just ['ee'] it 'aa' didn't match
                                                     // else b = [], and so on.
                                                     // we are doing each member of dv against each memeber of gotCities 
            if(b.length > 0){ // if the array b has any members (something matched out filter)
                pre.push(cur);// push the member of gotCities that it matched against to cur
            }
            return pre;
    }, []);

    helperKata("Kata 19", a);
    return (a);
}
kata19();

function kata20(){
    let a = lotrCitiesArray.reduce((pre, cur) => {
            if(cur.substr(-2) === "or")
            pre.push(cur);
            return(pre);
    }, [])
    helperKata("kata20", a);
}
kata20();

function kata21(){
    let a = bestThing.split(" ")
        .filter(val => val.indexOf("b") === 0);
    helperKata("kata21", a);
}
kata21();

function kata22(){
    let a = 'no';
    for(let i = 0; i < lotrCitiesArray.length; i++){
        if(lotrCitiesArray[i] === "Mirkwood"){
            a = 'yes';
        }
    }
    helperKata("kata22", a);
    return(a);
}
kata22();

function kata23(){
    let a = 'no';
    for( i = 0; i < lotrCitiesArray; i++){
        if(lotrCitiesArray[i] === "Hollywood"){
            a = 'yes'
        }
    }
    helperKata("kata23", a);
    return(a);
}
kata23();

function kata24(){
    let a = lotrCitiesArray.indexOf('Mirkwood');
    helperKata("kata24", a);
}
kata24();

function kata25(){
    // a becomes our new array
    let a = lotrCitiesArray
    //if an index of lotrCitiesArray can be split at a space,
    //  this will create a new array
    //  if the length of that new array is >1,
    //  then add the index of lotrArray to the new array a.
    .filter( val => val.split(" ").length > 1);
    helperKata("kata25", a);
    return(a);
}
kata25();

function kata26(){
    a = lotrCitiesArray.reverse();
    helperKata("kata26", a);
    return(a);
}
kata26();

function kata27(){
    a = lotrCitiesArray.sort();
    helperKata("kata27", a);
    return(a);
}
kata27();

function kata28(){
    //TODO
    lotrCitiesArray.sort((a, b) => a.length - b.length);
    helperKata("kata28", lotrCitiesArray);
    return(lotrCitiesArray);
}
kata28();

function kata29(){
    lotrCitiesArray.pop();
    helperKata("kata29", lotrCitiesArray);
    return(lotrCitiesArray);
}
kata29();

function kata30(){
    lotrCitiesArray.push("Deadest Marshes");
    helperKata("kata30", lotrCitiesArray);
    return(lotrCitiesArray);
}
kata30();

function kata31(){
    lotrCitiesArray.shift();
    helperKata("kata31", lotrCitiesArray);
    return(lotrCitiesArray);
}
kata31();

function kata32(){
    lotrCitiesArray.unshift("Rohan");
    helperKata("kata32", lotrCitiesArray);
    return(lotrCitiesArray);
}
kata32();