function fancyarray() {

    var arr = ["James", "Jill", "Jane", "Jack"];

    for (var i = 0; i < (arr.length); i++) {
        console.log(i + " -> " + arr[i]);
    }
}
function reversefancyarray() {
    
        var arr = ["James", "Jill", "Jane", "Jack"];
    //equals sign is required to run the condition in reverse to account for the 0 
        for (var i = arr.length-1; i >= 0 ; i--) {
            console.log(i + " -> " + arr[i]);
        }
    }
    
    
    
fancyarray();
console.log();
reversefancyarray()




