var button = document.getElementById("convert_button");
button.addEventListener("click", function (events) {
    var input = document.getElementById("input");
    var output = document.getElementById("output");
    var fromText = input.value.toString();
    output.value = "fromText";
    alert(fromText);
});
