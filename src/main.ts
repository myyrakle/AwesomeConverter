//electron 라이브러리 포함
import 'electron';
import {app, BrowserWindow } from 'electron';

import * as reload from 'electron-reload';
reload(`${__dirname}/../view`); //기준 디렉터리 등록

//준비되면 실행
app.on('ready', ()=>{
  // 브라우저 창을 생성합니다.
  let window = new BrowserWindow({
    width: 500,
    height: 500,
    resizable: false,
    webPreferences: {
      nodeIntegration:true,
    },
  });

  //window.loadFile('../view/index.html')
  window.loadURL(`file://${__dirname}/../view/index.html`);
});