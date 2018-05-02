
function daystilbirthday(daysUntilMyBirthday){


    if (daysUntilMyBirthday>=30)
    {
        console.log(daysUntilMyBirthday + "days until my birthday. Such a long time... :(");
    }
else    if (daysUntilMyBirthday<30 && daysUntilMyBirthday> 5) {
    
        console.log(daysUntilMyBirthday + "days until my birthday. I'm excited:)");
    }
else    if (daysUntilMyBirthday<=5 && daysUntilMyBirthday !== 0) {
    
        console.log(daysUntilMyBirthday + "DAYS UNTIL MY BIRTHDAY!!!");
    } 
    else {console.log ("*****HAPPY BIRTHDAY!!!!!!!******");}
}
    daystilbirthday(0)
