// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var winLogin = Titanium.UI.createWindow({  
    backgroundColor:'000',
    url: 'login.js'
});

winLogin.open();