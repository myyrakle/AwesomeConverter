//electron 라이브러리 포함
var electron_1 = require('electron');
var reload = require('electron-reload');
reload(__dirname); //기준 디렉터리 등록
function createWindow() {
    // 브라우저 창을 생성합니다.
    var window = new electron_1.BrowserWindow({
        width: 500,
        height: 500,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    window.loadURL("file://" + __dirname + "/view/index.html");
    // window.loadFile('view/index.html');
}
//준비되면 실행
electron_1.app.whenReady().then(createWindow);
//# sourceMappingURL=main.js.map