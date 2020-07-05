import { ipcRenderer } from "electron";

const button = document.getElementById("convert_button");

button.addEventListener("click", (events: MouseEvent): any => {
    ipcRenderer.send("convert", {});
});
export {};
