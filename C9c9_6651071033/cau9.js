$(document).ready(function () {
    $("#clear").click(function () {
        $("#myForm")[0].reset();
        $("#message").html("");
    });

    $("#finish").click(function () {
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var birthday = $("#birthday").val().trim();
        var address = $("#address").val().trim();
        var city = $("#city").val().trim();
        var gender = $("#gender").val();
        var age = $("#age").val().trim();
        var zip = $("#zip").val().trim();

        var errors = [];

        if (name == "" || address == "" || city == "") {
            errors.push("Các trường thông tin không được để trống.");
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.push("Email không hợp lệ.");
        }

        var datePattern = /^(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})$/;
        var match = birthday.match(datePattern);

        if (match == null) {
            errors.push("Ngày sinh phải có dạng mm/dd/yyyy hoặc mm-dd-yyyy.");
        } else {
            var month = Number(match[1]);
            var day = Number(match[2]);
            var year = Number(match[3]);
            var date = new Date(year, month - 1, day);

            if (month < 1 || month > 12 ||
                year >= new Date().getFullYear() ||
                date.getFullYear() != year ||
                date.getMonth() != month - 1 ||
                date.getDate() != day) {
                errors.push("Ngày sinh không hợp lệ.");
            }
        }

        if (gender == "") {
            errors.push("Vui lòng chọn giới tính.");
        }

        if (age == "" || !/^\d+$/.test(age) ||
            Number(age) < 1 || Number(age) > 120) {
            errors.push("Tuổi không hợp lệ.");
        }

        if (!/^\d{5}$/.test(zip)) {
            errors.push("ZIP code phải có đúng 5 chữ số.");
        }

        if (errors.length > 0) {
            alert(errors.join("\n"));
        } else {
            alert("Dữ liệu hợp lệ!");
        }
    });
});
