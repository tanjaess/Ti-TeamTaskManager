Titanium.UI.currentWindow.setBackgroundColor('#000');

var label1 = Ti.UI.createLabel({
  text:"Welcome to TeamTaskManager",
  top: 12,
  width: "80%",
  height: 25,
  left: "10%",
  color: '#fff',
  textAlign: 'center',
})

var labelusername = Ti.UI.createLabel({
  text:"Username:",
  top: 50,
  left: 30,
  width: "30%",
  height: 25,
  color: '#fff',
})

var txtUsername = Ti.UI.createTextField({
  top: 50,
  left: 120,
  width: "30%",
  height: 25,
  color: '#fff',
  textAlign: 'center',
})

var labelpassword = Ti.UI.createLabel({
  text:"Password:",
  top: 90,
  left: 30,
  width: "30%",
  height: 25,
  color: '#fff',
})

var txtPassword = Ti.UI.createTextField({
  top: 90,
  left: 120,
  width: "30%",
  height: 25,
  color: '#fff',
  textAlign: 'center',
})

var btnlogin = Ti.UI.createButton({
  title:"login",
  top: 150,
  width: "80%",
  height: 40,
  left: "10%",
})

btnlogin.addEventListener('click', function(e){
  var winOverview = Titanium.UI.createWindow({  
    backgroundColor:'000',
    url:'overview.js'
  });
  
  winOverview.open();
})

Titanium.UI.currentWindow.add(label1);
Titanium.UI.currentWindow.add(btnlogin);
Titanium.UI.currentWindow.add(txtPassword);
Titanium.UI.currentWindow.add(txtUsername);
Titanium.UI.currentWindow.add(labelpassword);
Titanium.UI.currentWindow.add(labelusername);
