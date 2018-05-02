$(document).ready(function(){
    $("#start").datepicker();
    $("#end").datepicker();
    $("form").submit(function(){
        if($("#name").val()) {
            // create alert here
            alert_text = "Thanks " + $("#name").val() +"! Your Cruise leaves on " + $("#start").val() + " and returns on " + $("#end").val() + "!";
            $("#alert").text(alert_text);
            $("#alert").dialog({
                modal: true,
                title: "Alert"
            });
        }
        else {
            // create error here
            error_text = "Error, no name specified";
            $("#error").text(error_text);
            $("#error").dialog({
                modal: true,
                title: "Error!"
            });
        }
        return false;
    })
});