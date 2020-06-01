//electron 라이브러리 포함
const electron = require('electron');
const { app, BrowserWindow } = electron;

function createWindow() 
{
  // 브라우저 창을 생성합니다.
  let window = new BrowserWindow({
    width: 500,
    height: 500,
  });

  // 그리고 앱의 index.html를 로드합니다.
  window.loadFile('view/index.html');
}

//준비되면 실행
app.whenReady().then(createWindow);