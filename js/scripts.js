$(function() {
    var idPreviousForm;

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
            idPreviousForm = "#form1";
            $("#form1-3").show();
        } else if (answer === "4") {
            $("#form1-4").show();
        } else {
            idPreviousForm = "#form1";
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
            $("#repeatQuiz").show();
        } else {
            $("#c-plus-plus").show();
            $("#repeatQuiz").show();
        }
    });

    $("#form1-1-1-2").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp1-1-1-2]:checked").val();
        if (answer === "1") {
            $("#c-sharp").show();
            $("#repeatQuiz").show();
        } else {
            $("#c-plus-plus").show();
            $("#repeatQuiz").show();
        }
    });

    $("#form1-1-2").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp1-1-2]:checked").val();
        if (answer === "1") {
            $("#c-sharp").show();
            $("#repeatQuiz").show();
        } else if (answer === "2") {
            $("#c-plus-plus").show();
            $("#repeatQuiz").show();
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
            $("#repeatQuiz").show();
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
            $("#repeatQuiz").show();
        } else if (answer === "2") {
            idPreviousForm = "#form1-2-2";
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
            $("#repeatQuiz").show();
        } else if (answer === "2") {
            $("#ruby").show();
            $("#repeatQuiz").show();
        } else {
            $("#js").show();
            $("#repeatQuiz").show();
        }
    });

    $("#form1-2-2-3").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp1-2-2-3]:checked").val();
        if (answer === "1") {
            $("#java").show();
            $("#repeatQuiz").show();
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
            $("#repeatQuiz").show();
        } else {
            $("#c-sharp").show();
            $("#repeatQuiz").show();
        }
    });

    $("#form1-2-2-4").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp1-2-2-4]:checked").val();
        if (answer === "1") {
            $("#python").show();
            $("#repeatQuiz").show();
        } else if (answer === "2") {
            $("#ruby").show();
            $("#repeatQuiz").show();
        } else {
            $("#java").show();
            $("#repeatQuiz").show();
        }
    });

    $("#form1-3").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp1-3]:checked").val();
        if (answer === "1") {
            $("#swift").show();
            $("#repeatQuiz").show();
        } else if (answer === "2") {
            $("#java").show();
            $("#repeatQuiz").show();
        } else {
            $("#c-sharp").show();
            $("#repeatQuiz").show();
        }
    });

    $("#form1-4").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp1-4]:checked").val();
        if (answer === "1") {
            $("#c-sharp").show();
            $("#repeatQuiz").show();
        } else if (answer === "2") {
            $("#swift").show();
            $("#repeatQuiz").show();
        } else {
            $("#java").show();
            $("#repeatQuiz").show();
        }
    });

    $("#form1-5").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp1-5]:checked").val();
        if (answer === "1") {
            $("#r").show();
            $("#repeatQuiz").show();
        } else {
            $("#python").show();
            $("#repeatQuiz").show();
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
            idPreviousForm = "#form2";
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
            $("#repeatQuiz").show();
        } else if (answer === "2") {
            $("#java").show();
            $("#repeatQuiz").show();
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
            $("#repeatQuiz").show();
        } else if (answer === "2") {
            $("#ruby").show();
            $("#repeatQuiz").show();
        } else {
            $("#python").show();
            $("#repeatQuiz").show();
        }
    });

    $("#form2-3").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp2-3]:checked").val();
        if (answer === "1" || answer === "3") {
            $("#c-sharp").show();
            $("#repeatQuiz").show();
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
            $("#repeatQuiz").show();
        } else {
            $("#c-sharp").show();
            $("#repeatQuiz").show();
        }
    });

    $("#form2-3-4").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp2-3-4]:checked").val();
        if (answer === "1" || answer === "3") {
            $("#c-plus-plus").show();
            $("#repeatQuiz").show();
        } else {
            $("#c-sharp").show();
            $("#repeatQuiz").show();
        }
    });

    $("#form3").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp3]:checked").val();
        if (answer === "1") {
            idPreviousForm = "#form3";
            $("#form1-3").show();
        } else if (answer === "2") {
            $("#form3-2").show();
        } else if (answer === "3") {
            $("#form3-3").show();
        } else if (answer === "4") {
            $("#form3-4").show();
        } else {
            $("#python").show();
            $("#repeatQuiz").show();
        }
    });

    $("#form3-2").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp3-2]:checked").val();
        if (answer === "1" || answer === "2") {
            $("#html-js").show();
            $("#repeatQuiz").show();
        } else {
            $("#form3-2-3").show();
            $("#repeatQuiz").show();
        }
    });

    $("#form3-2-3").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp3-2-3]:checked").val();
        if (answer === "1") {
            $("#python").show();
            $("#repeatQuiz").show();
        } else if(answer === "2") {
            $("#ruby").show();
            $("#repeatQuiz").show();
        } else {
            $("#php").show();
            $("#repeatQuiz").show();
        }
    });

    $("#form3-3").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp3-3]:checked").val();
        if (answer === "1" || answer === "3") {
            $("#html").show();
            $("#repeatQuiz").show();
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
            $("#repeatQuiz").show();
        } else {
            $("#c-sharp").show();
            $("#repeatQuiz").show();
        }
    });

    $("#form3-4").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp3-4]:checked").val();
        if (answer === "1") {
            $("#js").show();
            $("#repeatQuiz").show();
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
            $("#repeatQuiz").show();
        } else {
            $("#ruby").show()
            $("#repeatQuiz").show();
        }
    });

    $("#form4").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp4]:checked").val();
        if (answer === "1") {
            idPreviousForm = "#form4";
            $("#form1-3").show();
        } else if (answer === "2") {
            $("#form4-2").show();
        } else if (answer === "3") {
            idPreviousForm = "#form4";
            $("#form1-5").show();
        } else {
            $("#html").show();
            $("#repeatQuiz").show();
        }
    });

    $("#form4-2").submit(function(event) {
        event.preventDefault();
        $(".forms").hide();
        $(".language").hide();
        var answer = $("input:radio[name=inp4-2]:checked").val();
        if (answer === "1") {
            $("#html").show();
            $("#repeatQuiz").show();
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
            $("#repeatQuiz").show();
        } else if (answer === "2") {
            idPreviousForm = "#form4-2-2";
            $("#form1-2-2-2").show()
        } else {
            $("#java").show();
            $("#repeatQuiz").show();
        }
    });

    //back buttons
    $("#back1").click(function(){
        $("#form1").slideUp();
        $("#form0").slideDown();
    });

    $("#back1-1").click(function(){
        $("#form1-1").slideUp();
        $("#form1").slideDown();
    });

    $("#back1-1-1").click(function(){
        $("#form1-1-1").slideUp();
        $("#form1-1").slideDown();
    });

    $("#back1-1-1-1").click(function(){
        $("#form1-1-1-1").slideUp();
        $("#form1-1-1").slideDown();
    });

    $("#back1-1-1-2").click(function(){
        $("#form1-1-1-2").slideUp();
        $("#form1-1-1").slideDown();
    });

    $("#back1-1-2").click(function(){
        $("#form1-1-2").slideUp();
        $("#form1-1").slideDown();
    });

    $("#back1-2").click(function(){
        $("#form1-2").slideUp();
        $("#form1").slideDown();
    });

    $("#back1-2-2").click(function(){
        $("#form1-2-2").slideUp();
        $("#form1-2").slideDown();
    });

    $("#back1-2-2-2").click(function(){
        $("#form1-2-2-2").slideUp();
        $(idPreviousForm).slideDown();
    });

    $("#back1-2-2-3").click(function(){
        $("#form1-2-2-3").slideUp();
        $("#form1-2-2").slideDown();
    });

    $("#back1-2-2-3-2").click(function(){
        $("#form1-2-2-3-2").slideUp();
        $("#form1-2-2-3").slideDown();
    });

    $("#back1-2-2-4").click(function(){
        $("#form1-2-2-4").slideUp();
        $("#form1-2-2").slideDown();
    });

    $("#back1-3").click(function(){
        $("#form1-3").slideUp();
        $(idPreviousForm).slideDown();
    });

    $("#back1-4").click(function(){
        $("#form1-4").slideUp();
        $("#form1").slideDown();
    });

    $("#back1-5").click(function(){
        $("#form1-5").slideUp();
        $(idPreviousForm).slideDown();
    });

    $("#back2").click(function(){
        $("#form2").slideUp();
        $("#form0").slideDown();
    });

    $("#back2-1").click(function(){
        $("#form2-1").slideUp();
        $("#form2").slideDown();
    });

    $("#back2-1-3").click(function(){
        $("#form2-1-3").slideUp();
        $("#form2-1").slideDown();
    });

    $("#back2-3").click(function(){
        $("#form2-3").slideUp();
        $("#form2").slideDown();
    });

    $("#back2-3-2").click(function(){
        $("#form2-3-2").slideUp();
        $("#form2-3").slideDown();
    });

    $("#back2-3-4").click(function(){
        $("#form2-3-4").slideUp();
        $("#form2-3").slideDown();
    });

    $("#back3").click(function(){
        $("#form3").slideUp();
        $("#form0").slideDown();
    });

    $("#back3-2").click(function(){
        $("#form3-2").slideUp();
        $("#form3").slideDown();
    });

    $("#back3-2-3").click(function(){
        $("#form3-2-3").slideUp();
        $("#form3-2").slideDown();
    });

    $("#back3-3").click(function(){
        $("#form3-3").slideUp();
        $("#form3").slideDown();
    });

    $("#back3-3-2").click(function(){
        $("#form3-3-2").slideUp();
        $("#form3-3").slideDown();
    });

    $("#back3-4").click(function(){
        $("#form3-4").slideUp();
        $("#form3").slideDown();
    });

    $("#back3-4-2").click(function(){
        $("#form3-4-2").slideUp();
        $("#form3-4").slideDown();
    });

    $("#back4").click(function(){
        $("#form4").slideUp();
        $("#form0").slideDown();
    });

    $("#back4-2").click(function(){
        $("#form4-2").slideUp();
        $("#form4").slideDown();
    });

    $("#back4-2-2").click(function(){
        $("#form4-2-2").slideUp();
        $("#form4-2").slideDown();
    });

    //button to repeat quiz
    $("#repeatQuiz").click(function() {
        $("#repeatQuiz").fadeOut();
        $(".language").fadeOut();
        $("#form0").fadeIn();
    })
});