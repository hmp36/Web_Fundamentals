
$(document).ready(function(){
    console.log("jquery is ready");
    $("#card_form").submit(function(){
        var first = $("#first").val();
        var last = $("#last").val();
        var desc = $("#desc").val();
        // console.log(first, last, desc);
        // these variables are used below:
        $('#rolodex').append(
                `<div class="card">
                    <h1 class="displayed">${first} ${last}</h1>
                    <p class="displayed">Click for description</p>
                    <h3 class="hidden">${desc}</h3>
                </div>`
        );
        // $("#first").val() = "";
        // $("#last").val() = "";
        // $("#desc").val() = "";

        // "<div class = 'card'><h1 class = 'displayed'>" + first + "" (messy way)
        return false; // don't want it to reload the page, preventing the normal submission of this
    });
    /*
    $(".card").click(function(){
        console.log("someone clicked on a card");
    });
    */

    $(document).on("click", ".card", function(){
        $(this).children().toggle();
    });

});