$(document).ready(function(){
    // alert("ready");

    //************** START ***************/

    $("#for-click").click(function(){
        alert("I got clicked!");
    });
    
    $("#for-hide").click(function(){
        $("#for-hide").hide(800);
    })

    $("#for-show").click(function(){
        $("#for-hide").show(800);
    })

    $("#toggle").click(function(){
        $("#for-toggle").toggle(800);
    })

    $("#slide-up").click(function(){
        $("h2").slideUp();
    })

    $("#slide-down").click(function(){
        $("h2").slideDown();
    })

    $("#slide-toggle").click(function(){
        $("h2").toggle(2000);
    })

    $("#fade-out").click(function(){
        $("h2").fadeOut(800);
    })

    $("#fade-in").click(function(){
        $("h2").fadeIn(1200);
    })

    $("#add-class").click(function(){
        $("h2").addClass("change-blue");
    })
    
    $("#before").click(function(){
        $("h2").before("<h2>Before</h2>");
    })

    $("#after").click(function(){
        $("h2").after("<h2>After</h2>");
    })

    $("#append").click(function(){
        $("h2").append("NOT ");
    })

    $("#HTML").click(function(){
        $("h2").html("<h1>NOT</h1>");
    })

    $("#attr").click(function(){
        $("h2").attr("style","color: orange");
    })

    $("#val").click(function(){
        $("#input-text").val("Added Valued");
    })

    $("#text").click(function(){
        $("h2").text("<b>Tags don't work unlike .html()</b>");
    })

    $("#attach").click(function(){
        $("div").data("greet", "Hello World");
    });
    $("#get").click(function(){
        alert($("div").data("greet"));
    });
});

