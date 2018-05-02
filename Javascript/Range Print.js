function printrange (run, print, skip) {
    for (var i = run; i < print; i += skip){
        console.log(i);
    }
}

printrange(2,10,2);