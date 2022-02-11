const {app, BrowserWindow} = require('electron');
let win;
function createWindow (){
    win = new BrowserWindow({
        height: 1080,
        width:1920,
        autoHideMenuBar: true,
        webPreferences: {
            devTools: false
        }
    })
    win.loadURL(`file://${__dirname}/index.html`)
    win.on('closed',function(){
        win=null;
    })
}
app.on('ready',createWindow)
app.on('windows-all-closed',()=>{
    if(process.platform!=='darwin'){
        app.quit();
    }
})
app.on('activate',function(){
    if(win==null){
        createWindow()
    }
})