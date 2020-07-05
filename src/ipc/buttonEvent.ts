import { ipcRenderer } from "electron";

const button = document.getElementById("convert_button");
button.onclick((event: any) => {
    ipcRenderer.send("convert");
});
export {};
