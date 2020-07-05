import { ipcRenderer } from "electron";

const button = document.getElementById("convert_button");
button.onclick((event: MouseEvent) => {
    ipcRenderer.send("convert");
});
export {};
