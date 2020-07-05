"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var button = document.getElementById("convert_button");
button.addEventListener("click", function (events) {
    electron_1.ipcRenderer.send("convert", {});
});
