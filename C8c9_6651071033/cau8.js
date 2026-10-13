$(document).ready(function () {
    function calculate(operator) {
        var x = $("#txt1").val();
        var y = $("#txt2").val();

        if (x == "" || y == "") {
            $("#result").val("");
            return;
        }

        var a = Number(x);
        var b = Number(y);
        var result;

        if (operator == "+") {
            result = a + b;
        } else if (operator == "-") {
            result = a - b;
        } else if (operator == "*") {
            result = a * b;
        } else if (operator == "/") {
            if (b == 0) {
                alert("Không thể chia cho 0!");
                $("#result").val("");
                return;
            }

            result = a / b;
        }

        $("#result").val(result);
    }

    $("#cong").click(function () {
        calculate("+");
    });

    $("#tru").click(function () {
        calculate("-");
    });

    $("#nhan").click(function () {
        calculate("*");
    });

    $("#chia").click(function () {
        calculate("/");
    });
});
