const button = document.getElementById("convert_button");

button.addEventListener("click", (events: MouseEvent): any => {
    const input = <HTMLTextAreaElement>document.getElementById("input");
    const output = <HTMLTextAreaElement>document.getElementById("output");

    const fromText: string = input.value.toString();
    output.value = "fromText";
    alert(fromText);
});
