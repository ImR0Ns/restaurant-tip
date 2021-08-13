$(document).ready(function(){
    $(".submit").on("click", function(){
        var bill = Number($("#billNumb").val());
        var service = document.getElementById("serviceC");
        var result = service.options[service.selectedIndex].text;
        var persons = Number($("#persNumb").val());
        if (bill == "" || persons == "") {
            $(".errorMess").show();
            $(".totalTip").hide();
        } else {
            $(".errorMess").hide();
            switch(result) {
                case "Excelent":
                    var calcTotal = bill + 3 + persons;
                    var calcTip = 3 + persons;
                    $(".totalTip").text("Total: " + calcTotal + "$ (Tip: "+ calcTip +"$)");
                    $(".totalTip").show();
                    break;
                case "Good":
                    var calcTotal = bill + 2 + persons;
                    var calcTip = 2 + persons;
                    $(".totalTip").text("Total: " + calcTotal + "$ (Tip: "+ calcTip +"$)");
                    $(".totalTip").show();
                    break;
                case "Medium":
                    var calcTotal = bill + 1 + persons;
                    var calcTip = 1 + persons;
                    $(".totalTip").text("Total: " + calcTotal + "$ (Tip: "+ calcTip +"$)");
                    $(".totalTip").show();
                    break;
                case "Bad": 
                    var calcTotal = bill + 0 + persons;
                    var calcTip = 0;
                    $(".totalTip").text("Total: " + calcTotal + "$ (Tip: 0$)");
                    $(".totalTip").show();
                    break;
            }
        }

    });
});