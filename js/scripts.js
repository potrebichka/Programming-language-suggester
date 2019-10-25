$(function() {

    $("#form0").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp0]:checked").val();
        // if answer 1, go to form 1
        if (answer === "1") {
            $("#form1").show();
        } else if (answer === "2") {
            $("#form2").show();
        } else if (answer === "3") {
            $("#form3").show();
        } else {
            $("#form4").show()
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
        } else if (answer === "2") {
            $("#form1-2").show();
        } else if (answer === "3") {
            $("#form1-3").show();
        } else if (answer === "4") {
            $("#form1-4").show();
        } else {
            $("#form1-5").show()
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
        } else {
            $("#form1-1-2").show();
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
        } else {
            $("#form1-1-1-2").show();
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

    $("#form1-1-1-2").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp1-1-1-2]:checked").val();
        if (answer === "1") {
            $("#c-sharp").show();
        } else {
            $("#c-plus-plus").show()
        }
    });

    $("#form1-1-2").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp1-1-2]:checked").val();
        if (answer === "1") {
            $("#c-sharp").show();
        } else if (answer === "2") {
            $("#c-plus-plus").show()
        } else {
            $("#form1-1-1-2").show()
        }
    });

    $("#form1-2").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp1-2]:checked").val();
        if (answer === "1") {
            $("#html-js").show();
        } else {
            $("#form1-2-2").show()
        }
    });

    $("#form1-2-2").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp1-2-2]:checked").val();
        if (answer === "1") {
            $("#php").show();
        } else if (answer === "2") {
            $("#form1-2-2-2").show()
        } else if (answer === "3") {
            $("#form1-2-2-3").show()
        } else {
            $("#form1-2-2-4").show()
        }
    });

    $("#form1-2-2-2").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp1-2-2-2]:checked").val();
        if (answer === "1") {
            $("#python").show();
        } else if (answer === "2") {
            $("#ruby").show()
        } else {
            $("#js").show()
        }
    });

    $("#form1-2-2-3").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp1-2-2-3]:checked").val();
        if (answer === "1") {
            $("#java").show();
        } else {
            $("#form1-2-2-3-2").show()
        }
    });

    $("#form1-2-2-3-2").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp1-2-2-3-2]:checked").val();
        if (answer === "1") {
            $("#java").show();
        } else {
            $("#c-sharp").show()
        }
    });

    $("#form1-2-2-4").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp1-2-2-4]:checked").val();
        if (answer === "1") {
            $("#python").show();
        } else if (answer === "2") {
            $("#ruby").show()
        } else {
            $("#java").show()
        }
    });

    $("#form1-3").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp1-3]:checked").val();
        if (answer === "1") {
            $("#swift").show();
        } else if (answer === "2") {
            $("#java").show()
        } else {
            $("#c-sharp").show()
        }
    });

    $("#form1-4").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp1-4]:checked").val();
        if (answer === "1") {
            $("#c-sharp").show();
        } else if (answer === "2") {
            $("#swift").show()
        } else {
            $("#java").show()
        }
    });

    $("#form1-5").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp1-5]:checked").val();
        if (answer === "1") {
            $("#r").show();
        } else {
            $("#python").show()
        }
    });

    $("#form2").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp2]:checked").val();
        if (answer === "1") {
            $("#form2-1").show();
        } else if (answer === "2") {
            $("#form1-3").show();
        } else {
            $("#form2-3").show()
        }
    });

    $("#form2-1").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp2-1]:checked").val();
        if (answer === "1") {
            $("#php").show();
        } else if (answer === "2") {
            $("#java").show();
        } else {
            $("#form2-1-3").show()
        }
    });

    $("#form2-1-3").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp2-1-3]:checked").val();
        if (answer === "1") {
            $("#js").show();
        } else if (answer === "2") {
            $("#ruby").show();
        } else {
            $("#python").show()
        }
    });

    $("#form2-3").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp2-3]:checked").val();
        if (answer === "1" || answer === "3") {
            $("#c-sharp").show();
        } else if (answer === "2") {
            $("#form2-3-2").show();
        } else {
            $("#form2-3-4").show()
        }
    });

    $("#form2-3-2").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp2-3-2]:checked").val();
        if (answer === "1") {
            $("#c-plus-plus").show();
        } else {
            $("#c-sharp").show()
        }
    });

    $("#form2-3-4").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp2-3-4]:checked").val();
        if (answer === "1" || answer === "3") {
            $("#c-plus-plus").show();
        } else {
            $("#c-sharp").show()
        }
    });

    $("#form3").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp3]:checked").val();
        if (answer === "1") {
            $("#form1-3").show();
        } else if (answer === "2") {
            $("#form3-2").show();
        } else if (answer === "3") {
            $("#form3-3").show();
        } else if (answer === "4") {
            $("#form3-4").show();
        } else {
            $("#python").show();
        }
    });

    $("#form3-2").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp3-2]:checked").val();
        if (answer === "1" || answer === "2") {
            $("#html-js").show();
        } else {
            $("#form3-2-3").show()
        }
    });

    $("#form3-2-3").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp3-2-3]:checked").val();
        if (answer === "1") {
            $("#python").show();
        } else if(answer === "2") {
            $("#ruby").show();
        } else {
            $("#php").show()
        }
    });

    $("#form3-3").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp3-3]:checked").val();
        if (answer === "1" || answer === "3") {
            $("#html").show();
        } else {
            $("#form3-3-2").show()
        }
    });

    $("#form3-3-2").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp3-3-2]:checked").val();
        if (answer === "1") {
            $("#python").show();
        } else {
            $("#c-sharp").show()
        }
    });

    $("#form3-4").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp3-4]:checked").val();
        if (answer === "1") {
            $("#js").show();
        } else {
            $("#form3-4-2").show()
        }
    });

    $("#form3-4-2").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp3-4-2]:checked").val();
        if (answer === "1") {
            $("#python").show();
        } else {
            $("#ruby").show()
        }
    });

    $("#form4").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp4]:checked").val();
        if (answer === "1") {
            $("#form1-3").show();
        } else if (answer === "2") {
            $("#form4-2").show();
        } else if (answer === "3") {
            $("#form1-5").show();
        } else {
            $("#html").show();
        }
    });

    $("#form4-2").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp4-2]:checked").val();
        if (answer === "1") {
            $("#html").show();
        } else {
            $("#form4-2-2").show()
        }
    });

    $("#form4-2-2").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp4-2-2]:checked").val();
        if (answer === "1") {
            $("#php").show();
        } else if (answer === "2") {
            $("#form1-2-2-2").show()
        } else {
            $("#java").show()
        }
    });
});