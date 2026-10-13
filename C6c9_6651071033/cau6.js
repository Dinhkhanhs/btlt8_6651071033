
function getOptions() {
    var select = document.getElementById("mySelect");
    var count = select.options.length;
    var items = [];

    for (var i = 0; i < count; i++) {
        items.push(select.options[i].text);
    }

    alert("Number of items: " + count + "\nItems: " + items.join(", "));

    var countJQuery = $("#mySelect option").length;
    var itemsJQuery = [];

    $("#mySelect option").each(function () {
        itemsJQuery.push($(this).text());
    });

    alert("Number of items: " + countJQuery +
        "\nItems: " + itemsJQuery.join(", "));
}
