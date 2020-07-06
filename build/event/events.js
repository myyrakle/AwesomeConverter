"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../convert/string");
require("../convert/number");
var electron_log_1 = require("electron-log");
var button = document.getElementById("convert_button");
button.addEventListener("click", function (events) {
    var input = document.getElementById("input");
    var output = document.getElementById("output");
    electron_log_1.log("foo");
    var fromText = input.value.toString();
    var n = Number.parseInt(fromText);
    output.value = n.toString(16);
});
