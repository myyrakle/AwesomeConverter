import "../convert/string";
import "../convert/number";

import { log } from "electron-log";

const button = document.getElementById("convert_button");

button.addEventListener("click", (events: MouseEvent): any => {
    const input = <HTMLTextAreaElement>document.getElementById("input");
    const output = <HTMLTextAreaElement>document.getElementById("output");

    log("foo");

    const fromText: string = input.value.toString();

    const n: number = Number.parseInt(fromText);

    output.value = n.toString(16);

    //alert(n.toString(16));
});
