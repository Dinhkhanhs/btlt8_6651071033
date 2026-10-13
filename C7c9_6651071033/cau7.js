
$(document).ready(function () {
    $("#linkForm").submit(function (event) {
        event.preventDefault();

        var link = $("#linkInput").val().trim();

        if (link == "") {
            alert("Vui lòng nhập đường link!");
            return;
        }

        if (!/^https?:\/\//i.test(link)) {
            link = "https://" + link;
        }

        try {
            var url = new URL(link);

            if (url.protocol != "http:" && url.protocol != "https:") {
                throw new Error("Đường link không hợp lệ");
            }

            window.location.href = url.href;
        } catch (error) {
            alert("Đường link không hợp lệ!");
        }
    });
});
