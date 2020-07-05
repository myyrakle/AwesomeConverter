require('electron');
var electron_1 = require('electron');
var reload = require('electron-reload');
reload(__dirname + "/../view");
electron_1.app.on('ready', function () {
    var window = new electron_1.BrowserWindow({
        width: 500,
        height: 500,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    window.loadURL("file://" + __dirname + "/../view/index.html");
});
