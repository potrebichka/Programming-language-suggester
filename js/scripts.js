$(function() {

    $("#form0").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp0]:checked").val();
        // if answer 1, go to form 1
        if (answer === "1") {
            $("#form1").show();
        }
    });

    $("#form1").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp1]:checked").val();
        // if answer 1, go to form 1-1
        if (answer === "1") {
            $("#form1-1").show();
        }
    });

    $("#form1-1").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp1-1]:checked").val();
        // if answer 1, go to form 1-1-1
        if (answer === "1") {
            $("#form1-1-1").show();
        }
    });

    $("#form1-1-1").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp1-1-1]:checked").val();
        // if answer 1, go to form 1-1-1
        if (answer === "1") {
            $("#form1-1-1-1").show();
        }
    });

    $("#form1-1-1-1").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp1-1-1-1]:checked").val();
        if (answer === "1") {
            $("#c-sharp").show();
        } else {
            $("#c-plus-plus").show()
        }
    });
});