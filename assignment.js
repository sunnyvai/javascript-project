
// feetToMile 

function feetToMIle (feet ) {
    var mile = feet / 5280;
    return mile
}

// woodCalculator

function woodCalculator(chair,table,khat){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var khatCount = khat * 5 ;
    var totalWood = chairCount + tableCount + khatCount;
    return totalWood
}


//tinyFriends
var names = ["ria","jisa","morjina", "katrina", ]
var tinyFriends = names[0]

for (var i=0; i > names.length; i++){
    var element = names[i];
    if (element > names) {
        tinyFriends= element
    }
}

console.log( "tinyFriends =" + tinyFriends)