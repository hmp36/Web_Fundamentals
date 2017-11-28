function timeofday(hour, minute, period) {
    if (hour = 8 && minute >= 50 && period == "AM")

    {
        console.log("It's almost 9 in the morning");
    }

    if (hour = 7 && minute <= 15 && period == "PM")

    {
        console.log("It's just after 7 in the evening");
    }
}

timeofday(8, 50, "AM")
timeofday(7, 15, "PM")